import { Component } from '@angular/core';
import {AlgorithmListComponent} from './algorithms/algorithm-list.component';
 
@Component({
  selector: 'ml-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Machine Learning Demo';
}
