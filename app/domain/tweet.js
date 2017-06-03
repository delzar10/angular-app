System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tweet;
    return {
        setters:[],
        execute: function() {
            Tweet = (function () {
                function Tweet() {
                    this.index = 0;
                    this.totalLikes = 0;
                    this.index += 1;
                    this.iLike = false;
                    this.author = 'Windward';
                    this.handle = '@windwardstudios';
                    this.comment = 'hello from comment';
                    this.imageUrl = "http://lorempixel.com/100/100/people?" + this.index;
                    this.totalLikes = this.index;
                }
                return Tweet;
            }());
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=Tweet.js.map