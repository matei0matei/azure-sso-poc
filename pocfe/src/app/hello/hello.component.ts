import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
@Injectable()
export class HelloComponent {

  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8080/hello';
  result: String = "";

  ngOnInit() {
    this.hello();
  }

  hello() {
    this.http.get(this.url, {responseType: 'text'})
      .pipe()
      .subscribe(response => this.result = response);
  }
}
