var App = angular.module('App', []);
App.controller('MainController', function($scope, $http) {
  $http.get('http://kickoff-soccer.96.lt/GetAllUsers.php')
       .then(function(res){
       	
          $scope.profile = res.data;                
        });
});
