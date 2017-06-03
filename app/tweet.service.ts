import {Tweet}      from './domain/tweet';
import {Injectable} from 'angular2/core';

@Injectable()
export class TweetService {
    getTweets() : Tweet[] {
      return [new Tweet(), new Tweet(), new Tweet()];
    }
}
