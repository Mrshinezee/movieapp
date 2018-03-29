var app = angular.module('myApp', []);

  // app.controller('bittrexController', function($scope, $http){
  //   $scope.$watch('search', function() {
  //     fetch();
  //   });
  //
  //   $scope.search = "Sherlock Holmes";
  //
  //   function fetch(){
  //     $http.get("https://bittrex.com/api/v1.1/public/getmarkets")
  //     .then(function(response){ $scope.bittrexmarket = response.data; });
  //
  //     $http.get("http://www.omdbapi.com/?s=" + $scope.search)
  //     .then(function(response){ $scope.related = response.data; });
  //   }


      // $scope.fetch = function () {
      //     $http.get('https://bittrex.com/api/v1.1/public/getmarkets')
      //         .success(function (data, status, headers, config) {
      //             $scope.bittrexmarket = data;
      //         })
      //         .error(function (data, status, header, config) {
      //             $scope.ResponseDetails = "Data: " + data +
      //                 "<br />status: " + status +
      //                 "<br />headers: " + jsonFilter(header) +
      //                 "<br />config: " + jsonFilter(config);
      //         });

  // });

// someModule.controller('bittrexController', ['$scope', '$http', 'dep2', function($scope, $http, dep2) {
//
//     $scope.aMethod = function() {
//
//     }
//
// }]);



app.controller('bittrexController', function($scope, $http) {
    $http.get("https://bittrex.com/api/v1.1/public/getmarketsummaries")
        .then(function(response) {
            console.log(response);
            $scope.bittrexmarket = response.data;
            console.log('check response',bittrexmarket);
        }).catch(function(e) {console.log(e, 'error ')});

});



