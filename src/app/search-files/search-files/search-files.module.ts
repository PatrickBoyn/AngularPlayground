import { NgModule } from '@angular/core';
import {SearchFilesComponent} from '../search-files.component';
import {SharedModulesModule} from '../../../shared/shared-modules/shared-modules.module';



@NgModule({
  declarations: [SearchFilesComponent],
  imports: [
    SharedModulesModule
  ]
})
export class SearchFilesModule { }
