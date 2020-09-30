import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AlgorithmListComponent} from './algorithms/algorithm-list.component';
import { ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { AlgorithmDetailComponent } from './algorithms/algorithm-detail.component';
import { WelcomeComponent} from './home/welcome.component';
import {AlgorithmDetailGuard} from './algorithms/algorithm-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    AlgorithmDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
       { path: 'algorithms', component:AlgorithmListComponent},
       {path: 'algorithms/:id',
        canActivate:[AlgorithmDetailGuard],
        component:AlgorithmDetailComponent},
       {path: 'welcome', component:WelcomeComponent},
       {path: '', redirectTo:'welcome', pathMatch:'full'},
       {path: '**', redirectTo:'welcome',pathMatch:'full'}

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
