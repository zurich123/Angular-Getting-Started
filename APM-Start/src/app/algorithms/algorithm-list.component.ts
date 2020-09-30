import {Component, OnInit} from '@angular/core';
import {IAlgorithm} from './algorithm';

@Component({
    selector : 'algo-list',
    templateUrl: './algorithm-list.component.html',
    styleUrls: ['./algorithm-list.component.css']
})

export class AlgorithmListComponent implements OnInit{
    pageTitle: string = 'Algorithms List !!!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    private _listFilter: string;
    public get listFilter(): string {
       return this._listFilter;
    }
    public set listFilter(value: string) {
       this._listFilter = value;
       this.filteredAlgorithms = this.listFilter ? this.performFilter(this.listFilter):this.algorithms;
    }
    showImage: boolean = false;
    filteredAlgorithms: IAlgorithm[] = [];
    algorithms: IAlgorithm[] = [
        {
            "AlgorithmId": 1,
            "Algorithm": "Linear-Regression",
            "Type": "Supervised",
            "Prediction": "0.8",
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "AlgorithmId": 2,
            "Algorithm": "Naive-Bayes",
            "Type": "Supervised",
            "Prediction": "0.8",
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          },
          {
            "AlgorithmId": 3,
            "Algorithm": "Logistic-Regression",
            "Type": "Supervised",
            "Prediction": "0.8",
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
          },
          {
            "AlgorithmId": 4,
            "Algorithm": "Random-Forest",
            "Type": "Supervised",
            "Prediction": "0.8",
            "starRating": 3.7,
            "imageUrl": "assets/images/saw.png"
          },
          {
            "AlgorithmId": 5,
            "Algorithm": "K-Means",
            "Type": "Unsupervised",
            "Prediction": "0.7",
            "starRating": 4.6,
            "imageUrl": "assets/images/xbox-controller.png"
          }
        ];

    

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }

    onRatingClicked(message: string): void {
       this.pageTitle = 'Machine Learning Algorithms List  ' + message;
    }

    constructor() {
      this.filteredAlgorithms = this.algorithms;
      this.listFilter = 'Un';
    }

    performFilter(filterBy: string): IAlgorithm[] {
       filterBy = filterBy.toLocaleLowerCase();
       console.log(filterBy);
       return this.algorithms.filter((algorithm: IAlgorithm) =>
                  algorithm.Type.toLocaleLowerCase().indexOf(filterBy) != -1);

    }

   
}