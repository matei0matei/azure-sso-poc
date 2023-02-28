import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-hello',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
@Injectable()
export class UserInfoComponent {
  private url = 'http://localhost:8080/user-info';
  result: String = "";

  constructor(private http: HttpClient, private titleService:Title) {
    this.titleService.setTitle("UserInfo");
  }

  ngOnInit() {
    this.http.get(this.url, {responseType: 'text'})
      .pipe()
      .subscribe(response => this.result = response);
  }
}
