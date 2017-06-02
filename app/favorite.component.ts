import {Component, Input} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `
    <i
        class="glyphicon"
        [class.btn]="isFavorite"
        [class.btn-primary]="!isFavorite"
        [class.glyphicon-start]="isFavorite"
        [class.glyphicon-start-empty]="!isFavorite"
        (click)="onClickFavorite()">
    </i>
    `,
    inputs: ['isFavorite:is-favorite']
})
export class FavoriteComponent {
    @Input('is-favorite')
    isFavorite: boolean = false;

    onClickFavorite() {
      this.isFavorite = !this.isFavorite;
    }
}
