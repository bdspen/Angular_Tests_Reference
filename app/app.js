(function(){
  'use-strict'

  angular.module('app',[]);

//reverse filter---------------------------------
    function Reverse(){
      return function(string){
          return string.split('').reverse().join('');
      };
    };
    angular.module('app')
    .filter('Reverse', Reverse);

//controller1----------------------------------

    function Controller1(){

      var vm = this;
      vm.name = 'ben';

    };
    angular.module('app')
    .controller('Controller1', Controller1);

//factory-------------------------------------------
  function UserFactory($http){

    var userFactory = {
      getUsers: function(){
        $http.get('http://jsonplaceholder.typicode.com').success(function(data){
        })
        .error(function(status){
          console.log('error!: ' + status);
          return "ERROR";
        })
      }
    }
    return userFactory;

  }

  UserFactory.$inject = ['$http'];
  angular.module('app')
  .factory('UserFactory', UserFactory);


//directive---------------------------------------
      function dirdir(){
        var directive = {
          link: link,
          templateUrl: '/template/is/located/here.html',
          restrict: 'EA'
        }
      }
      angular.module('app')
      .directive('dirdir', dirdir);

}());
