import { Component, OnInit } from '@angular/core';
import { PublicApi, User } from '../../../generated-api/index';
import { AuthService } from '../../shared/authent/auth.service';
declare const gapi: any;

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
  providers: [PublicApi, AuthService]
})
export class ConnectComponent implements OnInit {

  publicApi: PublicApi;
  authService: AuthService;
  constructor(publicApi: PublicApi, authService: AuthService) {
    this.publicApi = publicApi;
    this.authService = authService;

    gapi.load('auth2', function () {
      gapi.auth2.init()
    });
  }

  ngOnInit() {
  }

  onSignIn(googleUser) {
    let googleAuth = gapi.auth2.getAuthInstance();
    googleAuth.then(() => {
      googleAuth.signIn({ scope: 'profile email' }).then(googleUser => {
        var profile = googleUser.getBasicProfile();

        this.publicApi.createUser({
          name: profile.getName(),
          mail: profile.getEmail(),
          picture: profile.getImageUrl(),
          type: 'google-user',
          id: googleUser.getAuthResponse().id_token
        }).subscribe((data: User) => this.authService.setToken(data.id));
      });
    });
  }

}
