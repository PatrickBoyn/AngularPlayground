import { NgModule } from '@angular/core';
import {PageNotFoundComponent} from '../page-not-found.component';
import {SharedModulesModule} from '../../../shared/shared-modules/shared-modules.module';



@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    SharedModulesModule
  ]
})
export class PageNotFoundModule { }
