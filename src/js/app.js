var app = angular.module("app", []);

app.controller("mainController", function ($scope, $http) {
     $http.get('js/sp.json')
       .then(function(res){
          $scope.txt = res.data;                
        });

/*    $scope.t00001txt01 = $scope.txt[0].t00001txt01[0].sp;
    $scope.t00002txt01 = $scope.txt[0].t00002txt01[0].sp;
    $scope.t00003txt01 = $scope.txt[0].t00003txt01[0].sp;
    $scope.t00004txt01 = $scope.txt[0].t00004txt01[0].sp;
    $scope.t00005txt01 = $scope.txt[0].t00005txt01[0].sp;
    $scope.t00005txt02 = $scope.txt[0].t00005txt02[0].sp;
    $scope.t00006txt01 = $scope.txt[0].t00006txt01[0].sp;
    $scope.t00007txt01 = $scope.txt[0].t00007txt01[0].sp;
    $scope.t00008txt01 = $scope.txt[0].t00008txt01[0].sp;
    $scope.t00009txt01 = $scope.txt[0].t00009txt01[0].sp;
    $scope.t00009txt02 = $scope.txt[0].t00009txt02[0].sp;
    $scope.t00010txt01 = $scope.txt[0].t00010txt01[0].sp;
    $scope.t00011txt01 = $scope.txt[0].t00011txt01[0].sp;
    $scope.t00012txt01 = $scope.txt[0].t00012txt01[0].sp;*/
});