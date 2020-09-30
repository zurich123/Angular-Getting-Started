import { Component } from '@angular/core';
import {AlgorithmListComponent} from './algorithms/algorithm-list.component';
 
@Component({
  selector: 'ml-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/algorithms']">Algorithm List</a></li>
      </ul>
    </nav>
    <div class='container'>
     <router-outlet></router-outlet>
     </div>
  `
  
})
export class AppComponent {
  pageTitle = 'Machine Learning Demo';
}
