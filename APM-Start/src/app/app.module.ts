import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

import { WelcomeComponent} from './home/welcome.component';

import {AlgorithmModule} from './algorithms/algorithm.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlgorithmModule,
    HttpClientModule,
    RouterModule.forRoot([
       
       {path: 'welcome', component:WelcomeComponent},
       {path: '', redirectTo:'welcome', pathMatch:'full'},
       {path: '**', redirectTo:'welcome',pathMatch:'full'}

    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
