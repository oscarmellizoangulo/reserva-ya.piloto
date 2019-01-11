import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';

declare var gapi: any;

@Injectable()
export class AuthProvider {
    
	
	user$: Observable<firebase.User>; 
	calendarItems: any[];

	constructor(public afAuth: AngularFireAuth) {
		
		this.initClient();
	}

	

	// Initialize the Google API client with desired scopes
	initClient() {
		gapi.load('client', () => {
		  console.log('loaded client')
	
		  // It's OK to expose these credentials, they are client safe.
		  gapi.client.init({
			apiKey: 'AIzaSyDlFEttJQj-9qZljkv9vea0Y9dzGvCOuE0',
			clientId: '185081747636-imu3deqo5qktjsm5hdv8j5652kf1d3ae.apps.googleusercontent.com',
			discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
			scope: 'https://www.googleapis.com/auth/calendar'
		  })
	
		  gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));
	
		});
	
	
	
	  }
	
	  async login() {
		//this.initClient();
		//const googleAuth = gapi.auth2.getAuthInstance()
		//const googleUser = await googleAuth.signIn();
	
		//const token = googleUser.getAuthResponse().id_token;
			const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhhYWQ2NmJkZWZjMWI0M2Q4ZGIyN2U2NWUyZTJlZjMwMTg3OWQzZTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTg1MDgxNzQ3NjM2LWltdTNkZXFvNXFrdGpzbTVoZHY4ajU2NTJrZjFkM2FlLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTg1MDgxNzQ3NjM2LWltdTNkZXFvNXFrdGpzbTVoZHY4ajU2NTJrZjFkM2FlLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEwNjI3MjA4NTM0MDY0MDQxNDk3IiwiZW1haWwiOiJvc2NhcjhpczA3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiRWtIUHRjQkN6cXREVEdpMkVXZ2ZjQSIsIm5hbWUiOiJPc2NhciBNZWxsaXpvIEFuZ3VsbyIsInBpY3R1cmUiOiJodHRwczovL2xoNC5nb29nbGV1c2VyY29udGVudC5jb20vLVc1ZGhId013Y2JJL0FBQUFBQUFBQUFJL0FBQUFBQUFBRFVNL1VIUVQ1a29sbzVvL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJPc2NhciIsImZhbWlseV9uYW1lIjoiTWVsbGl6byBBbmd1bG8iLCJsb2NhbGUiOiJlcyIsImlhdCI6MTU0Njk5Mzc0OSwiZXhwIjoxNTQ2OTk3MzQ5LCJqdGkiOiI1ODFjNDJiMjQ2Y2IyYzJlN2IzNGEwN2Y0NWVkNzkzODdkYzk0NWVlIn0.PMxYwwXstJfFk7EXd4Dl5PKR6rwPtC7uwwXn0k2RwC0oTlmMuBHTARhdQ50cmJ6fYOZdS2W7rJfaPc8JiiGM52jnxf36yvFgaF6sl05-x4T9juak-s30n26poj2p8C9qNnw0GEXBsi5t6LRZXPqjq9K3chf_i2AXrwfClL4Dhre4Srd9qiItsxNHm7X4kVyQOyUZDIDR4buhHtcYz-H_wjB8y8p5u1szOjSrB5xcLWP2yOoc_LMGqxOA-rezNkzCTKn6WxSs71-Dhn_gFMvjCTUCnB9M9ZH4iGCLemTJpsDtYfgAG1HgFUOmyba9FSFzXIF2d1kmZz-eQE6E3Y3FqA";
		console.log("token --> " + token);
		//console.log("googleUser --> " + googleUser);
	
		const credential = auth.GoogleAuthProvider.credential(token);
	
		await this.afAuth.auth.signInAndRetrieveDataWithCredential(credential);
	
		//this.getCalendar();

		// Alternative approach, use the Firebase login with scopes and make RESTful API calls
	
		// const provider = new auth.GoogleAuthProvider()
		// provider.addScope('https://www.googleapis.com/auth/calendar');
	
		// this.afAuth.auth.signInWithPopup(provider)
		
		}
		
	  logout() {
		this.afAuth.auth.signOut();
	  }
	
	  async getCalendar() {
			var from = new Date();
			from.setHours(0,0,0,0);
			var to = new Date();
			to.setHours(24,0,0,0);
			console.log("from -> " + from.toISOString());
			console.log("to -> " + to.toISOString());
		const events = await gapi.client.calendar.events.list({
		  calendarId: 'primary',
			timeMin: from.toISOString(),
			timeMax: to.toISOString(),
		  showDeleted: false,
		  singleEvents: true,
		  maxResults: 10,
		  orderBy: 'startTime'
		})
	
		console.log(events)
	
		this.calendarItems = events.result.items;
	  
	  }
	
	  async insertEvent() {
		const insert = await gapi.client.calendar.events.insert({
		  calendarId: 'primary',
		  start: {
			dateTime: hoursFromNow(2),
			timeZone: 'America/Bogota'
		  }, 
		  end: {
			dateTime: hoursFromNow(8),
			timeZone: 'America/Bogota'
		  }, 
		  summary: 'Have Fun!!!',
		  description: 'Do some cool stuff and have a fun time doing it'
		})
	
		await this.getCalendar();
	  }
	
	
}

const hoursFromNow = (n) => new Date(Date.now() + n * 1000 * 60 * 60 ).toISOString();
