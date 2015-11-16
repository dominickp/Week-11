describe("ListController", function(){
  var $scope, posts, listController;
  beforeEach(function(){
    module('directings');
    module(function($provide){
      $provide.service('posts', function(){
        this.posts = [];
        this.get = function(){
          this.posts = [1, 2, 3];
        };
      });
    });
    inject(function($rootScope, $controller, $injector){
      $scope = $rootScope.$new();
      listController = $controller('ListController', {$scope: $scope});
      posts = $injector.get('posts');
    });
  });
  describe("display", function(){
    it("should set a current post on the service", function(){
      expect(posts.current).toBeUndefined();
      listController.display({id:0});
      expect(posts.current.id).toBe(0);
    });
  });
});
