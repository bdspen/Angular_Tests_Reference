(function() {
    'use-strict'

    angular.module('app', []);

    //reverse filter---------------------------------
    function Reverse() {
        return function(string) {
            return string.split('').reverse().join('');
        };
    };
    angular.module('app')
        .filter('Reverse', Reverse);

    //controller1----------------------------------

    function Controller1() {

        var vm = this;
        vm.name = 'ben';

    };
    angular.module('app')
        .controller('Controller1', Controller1);

    //factory-------------------------------------------
    function UserFactory($http){

      return {
        getUsers: function(){
          return $http.get('http://jsonplaceholder.typicode.com')
        }
      }
    }

    UserFactory.$inject = ['$http'];
    angular.module('app')
    .factory('UserFactory', UserFactory);


    //directive---------------------------------------
    function dirdir() {
        return {
            link: link,
            scope: { //pull in any attributes on the element
                data: '='
            },
            controller: function($scope) {
                $scope.vm.hello = 'hello';
                console.log($scope.vm.hello);
            },
            controllerAs: 'vm',
            // templateUrl: '/template/is/located/here.html',
            restrict: 'E',
            replace: true //replaces your custom named element with a div (must wrap template code in a div)
        }

        function link(scope, element, attrs) { //use link to interact with dom
            console.log(scope);
        };
    }
    angular.module('app')
        .directive('dirdir', dirdir);

}());
