import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hello-name',
  templateUrl: './hello-name.component.html',
  styleUrls: ['./hello-name.component.scss']
})
export class HelloNameComponent {

  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8080/hello/';
  result: Object = "";
  errorMessage: Object = "";
  name: String = "";

  hello(name: String) {
    this.http.get(this.url + name, {responseType: 'text'})
      .pipe()
      .subscribe(response => {
        this.result = response;
        this.errorMessage = "";
      }, error => {
        console.log(error);
        this.errorMessage = "Invalid input, please insert your name...";
        this.result = "";
      });
  }
}
