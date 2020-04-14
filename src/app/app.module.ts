import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
