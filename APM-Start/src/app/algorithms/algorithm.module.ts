import { NgModule } from '@angular/core';

import {AlgorithmListComponent} from './algorithm-list.component';
import {AlgorithmDetailComponent} from './algorithm-detail.component';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';

import {RouterModule} from '@angular/router';
import {AlgorithmDetailGuard} from './algorithm-detail.guard';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    AlgorithmListComponent,
    AlgorithmDetailComponent,
    ConvertToSpacesPipe
    

  ],
  imports: [
    
    RouterModule.forChild([
      { path: 'algorithms', component:AlgorithmListComponent},
       {path: 'algorithms/:id',
        canActivate:[AlgorithmDetailGuard],
        component:AlgorithmDetailComponent},

    ]),
    SharedModule

  ]
})
export class AlgorithmModule { }
