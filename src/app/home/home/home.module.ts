import { NgModule } from '@angular/core';
import {HomeComponent} from '../home.component';
import {SharedModulesModule} from '../../../shared/shared-modules/shared-modules.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModulesModule
  ]
})
export class HomeModule { }
