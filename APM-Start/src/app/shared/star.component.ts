import {Component,EventEmitter,Input,OnChanges, Output} from '@angular/core';
@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
     @Input() rating: number;
     starWidth: number;
     @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        console.log(`The rating ${this.rating} was inputted`);
        this.starWidth = this.rating*15;
    }

    onClick():void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }


}