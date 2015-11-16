angular.module('directings')
.directive('postList', ['posts', function(posts){
  this.ctrl = function(){
    var dl = this;
    dl.posts = posts;
    posts.get();
    dl.display = function(post){
      posts.current = post;
    };
  };

  return {
    controller: this.ctrl,
    controllerAs: 'dl',
    templateUrl: 'templates/post-list.html'
  };
}]);
