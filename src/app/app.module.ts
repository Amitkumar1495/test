import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './sidebar/logo/logo.component';
import { NavigationComponent } from './sidebar/navigation/navigation.component';
import { StaticComponent } from './sidebar/static/static.component';
import { AccountComponent } from './sidebar/account/account.component';
import { ApiserviceComponent } from './apiservice/apiservice.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    LogoComponent,
    NavigationComponent,
    StaticComponent,
    AccountComponent,
    ApiserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
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
