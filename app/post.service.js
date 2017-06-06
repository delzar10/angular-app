System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', 'rxjs/add/observable/forkJoin'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var PostService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            PostService = (function () {
                function PostService(_http) {
                    this._http = _http;
                    this._url = "https://api.github.com/users/octocat";
                    this._urlProfile = 'https://api.github.com/users/octocat';
                    this._urlFollowers = 'https://api.github.com/users/octocat/followers';
                }
                PostService.prototype.getPosts = function () {
                    return this._http.get(this._url, corsHeaders).map(function (res) { return res.json(); });
                };
                PostService.prototype.createPost = function (post) {
                    return this._http.post(this._url, JSON.stringify(post)).map(function (res) { return res.json(); });
                };
                PostService.prototype.corsHeaders = function () {
                    new RequestOptions({
                        headers: new Headers({ "access-control-request-method": "POST" })
                    });
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=post.service.js.map