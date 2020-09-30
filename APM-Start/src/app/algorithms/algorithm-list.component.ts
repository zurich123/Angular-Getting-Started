import {Component, OnInit} from '@angular/core';
import {IAlgorithm} from './algorithm';
import {AlgorithmService} from './algorithm.service';
 
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
    algorithms: IAlgorithm[] = [];
      
    toggleImage():void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
        this.algorithms = this.algorithmService.getAlgorithms();
        this.filteredAlgorithms = this.algorithms;

    }

    onRatingClicked(message: string): void {
       this.pageTitle = 'Machine Learning Algorithms List  ' + message;
    }

    constructor(private algorithmService: AlgorithmService) {
     
     
    }

    performFilter(filterBy: string): IAlgorithm[] {
       filterBy = filterBy.toLocaleLowerCase();
       console.log(filterBy);
       return this.algorithms.filter((algorithm: IAlgorithm) =>
                  algorithm.Type.toLocaleLowerCase().indexOf(filterBy) != -1);

    }

   
}