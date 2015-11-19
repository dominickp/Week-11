angular.module('directings')
.directive('postList', ['posts', function(posts){

        return {
            templateUrl: "templates/post-list.html",
            controller: function(){
                var lc = this;
                lc.posts = posts;
                posts.get();

                lc.display = function(post){
                    posts.current = post;
                };
            },
            controllerAs: 'lc'
        };

}]);
