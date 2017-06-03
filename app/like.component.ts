import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styles: [`
        .glyphicon-hert {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted {
            color: deeppink;
        }
    `]
})
export class LikeComponent {
    @Input()
    iLike: boolean = false;

    @Input()
    totalLikes: number = 0;

    onClick() {
      this.iLike = !this.iLike;
      this.totalLikes += this.iLike ? 1 : -1;
     }
}