import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CardsModule} from './cards/cards.module';
import {HomeModule} from './home/home/home.module';
import {SearchFilesModule} from './search-files/search-files/search-files.module';
import {PageNotFoundModule} from './page-not-found/page-not-found/page-not-found.module';
import {CardService} from './services/card.service';
import {CrudService} from './services/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CardsModule,
    HomeModule,
    SearchFilesModule,
    PageNotFoundModule
  ],
  // More for experimentation than a need.
  providers: [
    CardService,
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
