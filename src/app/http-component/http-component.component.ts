import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.css']
})
export class HttpComponentComponent implements OnInit {
  data : Object;
  loading: boolean;

  constructor(private http: Http) { }

  makeRequest() {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/')
      .subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
        console.log(this.data);

      })
  }

  makePost() {
    this.loading = true;
    this.http.post(
      'http://jsonplaceholder.typicode.com/posts/',
      JSON.stringify({
        body: 'this is body',
        title: 'this is title',
        userId: 1
      }))
      .subscribe((res: Response) => {
      this.data = res.json();

      console.log(this.data);
      this.loading = false;
      })
  }

  ngOnInit() {
  }

}
