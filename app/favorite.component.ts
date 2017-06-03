import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles:[`
        .glyphicon-star {
            color: orange
        }
    `]
    //stylesUrl
})
export class FavoriteComponent {
    @Input('is-favorite')
    isFavorite: boolean = false;

    @Output()
    change = new EventEmitter();

    onClickFavorite() {
      this.isFavorite = !this.isFavorite;
      this.change.emit({ newValue: this.isFavorite }); // send an object or null
    }
}
