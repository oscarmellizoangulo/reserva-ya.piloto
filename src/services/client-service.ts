import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ClientProvider {
    authState: any = null;
    private user: firebase.User;
    constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private toastCtrl: ToastController) {
      this.afAuth.authState.subscribe((auth) => {
        this.authState = auth
      });
    }
    createUserWithEmailAndPassword(email, password){
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
            this.authState = user
            this.updateUserData()
            this.presentToast('Usuario Creado Exitosamente');
          })
          .catch(error => {
            console.log(error)
            this.presentToast(error.message);
          });
    }

    signInWithEmail(email, password) {
      console.log('Sign in with email');
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
              this.authState = user;
              this.updateUserData();
            })
            .catch(error => {
              console.log(error);
              this.presentToast(error.message);
            });
    }
    
    presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 4000,
        position: 'top'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }

    private updateUserData(): void {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
      
          let path = "users/" + this.authState.user.uid; // Endpoint on firebase
          let data = {
                        email: this.authState.user.email,
                        name: this.authState.user.displayName
                      }
          this.db.object(path).update(data).catch(error => console.log(error));
      
        }

        // Returns current user UID
        get currentUserId(): string {
            return this.authenticated ? this.authState.uid : '';
        }

        get authenticated(): boolean {
            return this.authState !== null;
          }
}