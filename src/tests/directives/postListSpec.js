describe('postList directive', function(){
  var compile, scope, compiledDirective, posts, controller;
  beforeEach(function(){
    module('templates', 'directings');
    module(function($provide){
      $provide.service('posts', function(){
        this.posts = [];
        this.get = function(){
          this.posts = [1, 2, 3];
        };
      });
    });

    inject(function($compile, $rootScope, $injector){
      compile = $compile;
      scope = $rootScope.$new();
      posts = $injector.get('posts');
    });

    var element = angular.element('<post-list></post-list>');
    compiledDirective = compile(element)(scope);
    scope.$digest();
    controller = compiledDirective.controller('postList');

  });
  describe("controller", function(){
    describe("display", function(){
      it("should set a current post on the service", function(){
        expect(posts.current).toBeUndefined();
        controller.display({id:0});
        expect(posts.current.id).toBe(0);
      });
    });
  });

});
