import {Component, OnInit} from '@angular/core';
import {IAlgorithm} from './algorithm';
import {AlgorithmService} from './algorithm.service';
 
@Component({
    
    templateUrl: './algorithm-list.component.html',
    styleUrls: ['./algorithm-list.component.css']
})

export class AlgorithmListComponent implements OnInit{
    pageTitle: string = 'Algorithms List !!!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    private _listFilter: string;
    errorMessage:string;
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
       this.algorithmService.getAlgorithms().subscribe({
         next:algorithms =>{
              this.algorithms = algorithms;
              this.filteredAlgorithms = this.algorithms;
         },
         error: err => this.errorMessage = err
       });
        console.log('In OnInit');
        
        

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