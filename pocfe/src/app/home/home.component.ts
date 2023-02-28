import {Component, Injectable} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-hello',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable()
export class HomeComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Home");
  }
}
