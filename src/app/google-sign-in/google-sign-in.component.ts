import { Component, AfterViewInit } from '@angular/core';
import { GoogleAuth, OAuth2ClientOptions } from 'google-auth-library';

declare const gapi: any;

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements AfterViewInit {

  ngAfterViewInit() {
    const googleAuthOptions: OAuth2ClientOptions = {
      clientId: 'YOUR_CLIENT_ID',
      scopes: ['profile', 'email']
    };
    const googleAuth = new GoogleAuth(googleAuthOptions);
    googleAuth.getClient().then(() => {
      gapi.signin2.render('google-sign-in-button', {
        scope: 'profile email',
        width: 200,
        height: 50,
        longtitle: true
        theme: 'dark',
        onsuccess: (googleUser: gapi.auth2.GoogleUser) => {
          const email = googleUser.getBasicProfile().getEmail();
          const name = googleUser.getBasicProfile().getName();
          // Send email and name to your backend for validation
        },
        onfailure: (error) => {
          console.log(error);
        }
      });
    }).catch((error) => {
      console.log(error);
    });
  }

}
