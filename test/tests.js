describe('App', function(){//describe the obj type
  beforeEach(module('app'));//load module

//reverse-------------------------------------------------------------------------
  describe('Reverse', function(){//describe the name of the module

    var Reverse;
    beforeEach(inject(function($filter){
      Reverse = $filter('Reverse',{});
    }));

    //1st test
    it('Should Reverse a string', function(){
      expect(Reverse('rahil')).toBe('lihar');
      expect(Reverse('don')).toBe('nod');
    });

  });

//Controller 1 -------------------------------------------------------------------
  describe('controller1', function(){//describe the name of the module

    var Controller1, scope;
    beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      Controller1 = $controller('Controller1 as vm',{$scope:scope});
    }));

    afterEach(function(){
      //cleanup code
    });

    //1st test
    it('Should exist', function(){
      expect(Controller1).toBeDefined();
    });

    it('Should init Controller1 values', function(){
      expect(Controller1.name).toBe('ben');
    });

  });

//UserFactory--------------------------------------------------------------
  describe('UserFactory', function(){

    var UserFactory, $httpBackend;
    beforeEach(inject(function(_UserFactory_, $injector){
      UserFactory = _UserFactory_;
      $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should exist', function(){
      expect(UserFactory).toBeDefined();
    });

    it('should return users', function(){
      var success;
      UserFactory.getUsers();
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com').respond(200);
      $httpBackend.flush();
    });
  });

});
