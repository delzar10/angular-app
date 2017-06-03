import {Component}         from 'angular2/core';
import {LikeComponent}     from './like.component';
import {CoursesComponent}  from './courses.component';
import {FavoriteComponent} from './favorite.component';
import {VoterComponent}    from './voter.component';
import {TweetsComponent}   from './tweets.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [CoursesComponent, FavoriteComponent, LikeComponent, VoterComponent, TweetsComponent]
})
export class AppComponent {
    title: string = "Angular App";

    tweet = {
        totalLikes: 10,
        iLike: false
    }

    post = {
        title: "Title",
        isFavorite: true,
        myVote: 0,
        voteCount: 10
    }

    onFavoriteChange($event){
      alert(console.log($event))
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

    onVote($event) {
      console.log($event);
    }
}
