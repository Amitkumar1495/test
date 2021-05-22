import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Eniola';
  data:any;

  constructor(
  	private http : HttpClient
  	) { }

  ngOnInit(): void {
  	this.http.get('https://admin.cookwitheniola.com/api/v1/get-chef-details?id=physkitchen-2&lang=en&store=1&user_id=')
    .subscribe(Response => {
      console.log(Response);


      this.data= JSON.parse( JSON.stringify(Response));
    });
}
}