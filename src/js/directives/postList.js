angular.module('directings')
.directive('postList', ['posts', function(posts){
  return {
    controller: function(){
      var dl = this;
      dl.posts = posts;
      posts.get();
      dl.display = function(post){
        posts.current = post;
      };
    },
    controllerAs: 'dl',
    templateUrl: 'templates/post-list.html'
  };
}]);
