System.register(['angular2/core', './courses.component', './favorite.component', './observable.component', './post.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, favorite_component_1, observable_component_1, post_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (observable_component_1_1) {
                observable_component_1 = observable_component_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Angular App";
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                }
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log($event);
                };
                AppComponent.prototype.onDivClick = function ($event) {
                    console.log("Handle by Div");
                };
                AppComponent.prototype.onClickFavorite = function () {
                    this.post.isFavorite = !this.post.isFavorite;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"container\">\n      <h1>Spotify</h1>\n      <!--favorite [is-favorite]=\"post.isFavorite\"></favorite-->\n      <post></post>\n      <!--observable></observable-->\n    </div>\n\n    <!--input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\" />\n    <input type=\"text\" [(ngModel)]=\"title\" />\n    <input type=\"text\" bindon-ngModel=\"title\" />\n    <button type=\"button\" (click)=\"title = ''\" value=\"Clear\">\n    Preview: {{title}}\n    <div (click)=\"onDivClick($event)\">\n      <button (click)=\"onClick($event)\">Submit</button>\n      <button on-click=\"onClick($event)\">Submit</button>\n      <courses></courses>\n    </div-->\n    ",
                        directives: [courses_component_1.CoursesComponent, favorite_component_1.FavoriteComponent, observable_component_1.ObservableComponent, post_component_1.PostComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map