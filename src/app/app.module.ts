import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './cards/card/card.component';
import { CreateCardComponent } from './cards/create-card/create-card.component';
import { SearchFilesComponent } from './search-files/search-files.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'searchFiles', component: SearchFilesComponent},
  {path: 'addFiles', component: CreateCardComponent},
  {path: 'browseFiles', component: CardsComponent,
    children: [{path: ':id', component: CardComponent}]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    CreateCardComponent,
    SearchFilesComponent,
    HomeComponent,
    CardsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
