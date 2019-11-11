import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchFilesComponent} from './search-files/search-files.component';
import {CreateCardComponent} from './cards/create-card/create-card.component';
import {CardsComponent} from './cards/cards.component';
import {CardComponent} from './cards/card/card.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search-files', component: SearchFilesComponent},
  {path: 'add-files', component: CreateCardComponent},
  {path: 'browse-files', component: CardsComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
