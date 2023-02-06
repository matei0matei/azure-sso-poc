import {AuthConfig} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: 'https://login.microsoftonline.com/f149f7de-cb02-4676-9d90-1267010bdd49/v2.0',
  redirectUri: window.location.origin + '/hello',
  clientId: '0a6c478c-7c31-414d-8cb7-ca65541a8a8a',
  responseType: 'code',
  strictDiscoveryDocumentValidation: false,
  scope: 'openid api://0a6c478c-7c31-414d-8cb7-ca65541a8a8a/ppbe'
}
