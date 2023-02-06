import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloNameComponent } from "./hello-name/hello-name.component";
import { HelloComponent } from "./hello/hello.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'hello-name', component: HelloNameComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
