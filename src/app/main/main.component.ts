import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import {YouTubePlayerModule} from '@angular/youtube-player';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
data:any;
receipies:any;
receipies2:any;
safeUrl:any;

  constructor(
  	private http : HttpClient,
    private _sanitizer:DomSanitizer
  	
  	) { }

  ngOnInit(): void {


  	this.http.get('https://admin.cookwitheniola.com/api/v1/get-chef-details?id=physkitchen-2&lang=en&store=1&user_id=')
    .subscribe(Response => {
      console.log(Response);
      this.data= JSON.parse( JSON.stringify(Response));
      this.receipies = JSON.stringify(this.data.data.recipes);
      this.receipies2 = this.data.data.recipes;
                           }
               )
    ;

  }

}
