import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component';
import {Tweet}  from './domain/Tweet';

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.template.html',
    directives: [LikeComponent]
})
export class TweetComponent {
    @Input()
    tweet: Tweet[];

    constructor(){
        console.log(this.tweet);
    }
}