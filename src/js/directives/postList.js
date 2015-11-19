angular.module('directings')
.directive('postList', ['posts', function(posts){
    //var lc = this;
    //lc.posts = posts;
    //posts.get();
    //
    //lc.display = function(post){
    //    posts.current = post;
    //};

        return {
            templateUrl: "templates/post-list.html",
            controller: 'ListController',
            controllerAs: 'lc'
        };

}]);
