var app = angular.module('app', []);

app.controller('AppController', ['$scope', function($scope) {
    //Variables iniciales
    $scope.greeting = 'Hola!';
    
    $scope.mostrarLogin = true;
    $scope.mostrarPagina1 = false;
    $scope.mostrarPagina2 = false;

    $scope.irAPagina1 = function(){
        $scope.mostrarPagina1 = true;
        $scope.mostrarLogin = false;
        $scope.mostrarPagina2 = false;
    }
    
    $scope.irAPagina2 = function(){
        $scope.mostrarPagina2 = true;
        $scope.mostrarLogin = false;
        $scope.mostrarPagina1 = false;
    }
    
    $scope.irALogin = function(){
        $scope.mostrarLogin = true;
        $scope.mostrarPagina1 = false;
        $scope.mostrarPagina2 = false;
    }

}]);







