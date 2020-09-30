import { Component, OnInit } from '@angular/core';
import {IAlgorithm} from './algorithm';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
 
  templateUrl: './algorithm-detail.component.html',
  styleUrls: ['./algorithm-detail.component.css']
})
export class AlgorithmDetailComponent implements OnInit {
  pageTitle: string = 'Algorithm Detail';
  algorithm: IAlgorithm;

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id =+this.route.snapshot.paramMap.get('id');
    this.pageTitle += `:${id}`;
    this.algorithm = {
      'AlgorithmId': id,
      'Algorithm': 'K-Means',
      'Prediction': '70%',
      'Type': 'Supervised',
      'starRating': 3.2,
      'imageUrl': 'assets/images/leaf_rake.png'
    }
  }

  onBack(): void {
    this.router.navigate(['/algorithms']);
  }

}
