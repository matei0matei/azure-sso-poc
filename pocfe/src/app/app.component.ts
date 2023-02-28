import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "../auth.config";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pocfe';

  // milliseconds to allow the OAuth2 library to finish the async login process
  private static OAUTH2_LOGIN_FINISH_MS = 1000;
  // storage implementation used by the OAuth2 library
  // TODO configure OAuth2 library to use this storage (do not rely on the fact that this is the default storage)
  private static OAUTH2_STORAGE = sessionStorage;
  // must be identical to this value: https://github.com/manfredsteyer/angular-oauth2-oidc/blob/15.0.0/projects/lib/src/oauth-service.ts#L1810
  private static OAUTH2_ROUTE_BEFORE_LOGIN_KEY = 'requested_route';
  // default route to navigate to after login (if the route requested before login cannot be determined)
  private static ROUTE_AFTER_LOGIN_DEFAULT = '/home';

  constructor(private oauthService: OAuthService, private router: Router) {
    // configure the OAuth2 library
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
    this.oauthService.setupAutomaticSilentRefresh();

    // once the login completes, navigate to the route requested before login
    this.oauthService.events.subscribe((ev) => {
      if (ev.type !== 'token_received')
        return;

      // the following works due to https://github.com/manfredsteyer/angular-oauth2-oidc/blob/15.0.0/projects/lib/src/oauth-service.ts#L1809-L1812
      let routeAfterLogin = AppComponent.OAUTH2_STORAGE.getItem(AppComponent.OAUTH2_ROUTE_BEFORE_LOGIN_KEY);
      if (routeAfterLogin === null) {
        console.warn("Session storage key not set: " + AppComponent.OAUTH2_ROUTE_BEFORE_LOGIN_KEY + "! Using default route after login: " + AppComponent.ROUTE_AFTER_LOGIN_DEFAULT + "...");
        routeAfterLogin = AppComponent.ROUTE_AFTER_LOGIN_DEFAULT;
      }

      // allow the OAuth2 library to finish before navigating away
      setTimeout((path: string) => {
        console.debug("navigating to " + path + "...");
        router.navigateByUrl(path);
      }, AppComponent.OAUTH2_LOGIN_FINISH_MS, routeAfterLogin);
    });
  }
}
