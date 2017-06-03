import {Tweet}          from './domain/Tweet';
import {Component}      from 'angular2/core';
import {TweetService}   from './tweet.service';
import {TweetComponent} from './tweet.component';

@Component({
    selector: 'tweets',
    templateUrl: 'app/tweets.template.html',
    styleUrls: ['app/tweets.template.css'],
    providers: [TweetService],
    directives: [TweetComponent]
})
export class TweetsComponent {
    tweets: Tweet[];
    title: string = "Tweets";

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}