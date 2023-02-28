import {AuthConfig} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: 'https://login.microsoftonline.com/f149f7de-cb02-4676-9d90-1267010bdd49/v2.0',
  redirectUri: 'http://localhost:4200/oauth2-callback',
  clientId: '0a6c478c-7c31-414d-8cb7-ca65541a8a8a',
  responseType: 'code',
  scope: 'openid api://0a6c478c-7c31-414d-8cb7-ca65541a8a8a/ppbe',
  // show debug messages
  // TODO show all debug messages (not only some of them)
  showDebugInformation: true,
  // the following is required for
  // (1) saving the route before login in storage key = 'requested_route' (https://github.com/manfredsteyer/angular-oauth2-oidc/blob/15.0.0/projects/lib/src/oauth-service.ts#L1808)
  // (2) removing the OAuth2 callback route from browser's history (https://github.com/manfredsteyer/angular-oauth2-oidc/blob/15.0.0/projects/lib/src/oauth-service.ts#L1819)
  preserveRequestedRoute: true,
  strictDiscoveryDocumentValidation: false
}
