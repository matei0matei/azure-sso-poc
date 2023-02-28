import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Oauth2CallbackComponent } from "./oauth2-callback/oauth2-callback.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { HomeComponent } from "./home/home.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  { path: 'oauth2-callback', component: Oauth2CallbackComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
