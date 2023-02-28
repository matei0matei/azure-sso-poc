import {Component, Injectable} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-hello',
  templateUrl: './oauth2-callback.component.html',
  styleUrls: ['./oauth2-callback.component.scss']
})
@Injectable()
export class Oauth2CallbackComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Oauth2 Callback");
  }
}
