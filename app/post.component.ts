import {Component, OnInit, OnDestroy, DoCheck, OnChanges} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';


@Component({
    selector: 'post',
    template: `
      <div *ngIf="isLoading">
        <i class="fa fa-spinner fa-spin fa-3x"></i>
      </div>
    `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class PostComponent implements OnInit, OnDestroy, DoCheck, OnChanges {
    isLoading: boolean = true;

    constructor (private _postService: PostService) {

    }

    ngOnInit() {
       this._postService.getPosts().subscribe(posts =>{
          this.isLoading = false;
          console.log(posts);
       });
    }

    ngOnDestroy() {

    }

    ngDoCheck() {

    }

    ngOnChanges() {

    }
}
