import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AlgorithmListComponent} from './algorithms/algorithm-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
