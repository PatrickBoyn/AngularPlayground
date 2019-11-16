import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from './card/card.component';
import {CreateCardComponent} from './create-card/create-card.component';
import {CardsComponent} from './cards.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SharedModulesModule} from '../../shared/shared-modules/shared-modules.module';



@NgModule({
  declarations: [
    CardComponent,
    CreateCardComponent,
    CardsComponent,
  ],
  imports: [
    SharedModulesModule
  ],

})
export class CardsModule { }
