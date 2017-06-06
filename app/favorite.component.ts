import {Component, Input, EventEmitter, Output} from 'angular2/core';

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
    inputs: ['isFavorite:is-favorite'],
    outputs: ['change:has-change']
})
export class FavoriteComponent {
    @Input('is-favorite')
    isFavorite: boolean = false;

    @Output('has-change')
    change = new EventEmitter();

    onClickFavorite() {
      this.isFavorite = !this.isFavorite;
      this.change.emit({ newValue: this.isFavorite });
    }
}
