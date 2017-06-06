import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/forkJoin';
import {Post} from './post';

@Injectable()
export class PostService {
    private _url = "https://api.github.com/users/octocat";
    private _urlProfile = 'https://api.github.com/users/octocat';
    private _urlFollowers = 'https://api.github.com/users/octocat/followers';

    constructor(private _http: Http){

    }

    getPosts(): Observable<Post[]> {
        return this._http.get(this._url, corsHeaders).map(res => res.json());
    }

    createPost(post: Post) {
        return this._http.post(this._url, JSON.stringify(post)).map(res => res.json());
    }

    private corsHeaders() : RequestOptions {
        new RequestOptions({
            headers: new Headers({"access-control-request-method": "POST"});
        })
    }
}
