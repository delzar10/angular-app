import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>Hello Angular</h1>
    <favorite [is-favorite]="post.isFavorite"></favorite>
    Preview: {{ post.isFavorite }}

    <!--input type="text" [value]="title" (input)="title = $event.target.value" />
    <input type="text" [(ngModel)]="title" />
    <input type="text" bindon-ngModel="title" />
    <button type="button" (click)="title = ''" value="Clear">
    Preview: {{title}}
    <div (click)="onDivClick($event)">
      <button (click)="onClick($event)">Submit</button>
      <button on-click="onClick($event)">Submit</button>
      <courses></courses>
    </div-->
    `,
    directives: [CoursesComponent, FavoriteComponent]
})
export class AppComponent {
    title: string = "Angular App";

    post = {
        title: "Title",
        isFavorite: true
    }


    onClick($event) {
      $event.stopPropagation();
      console.log($event);
    }

    onDivClick($event) {
      console.log("Handle by Div");
    }

    onClickFavorite() {
      this.post.isFavorite = !this.post.isFavorite;
    }
}
