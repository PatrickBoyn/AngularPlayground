import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CrudService} from '../services/crud.service';
import {CardService} from '../services/card.service';



@NgModule({
  declarations: [],
  providers: [CrudService, CardService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
