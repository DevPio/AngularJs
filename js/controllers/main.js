var app = angular.module('AluraPic',['ngRoute','minhasDiretivas','Titulo','ngAnimate','cabecalho','Foto'])


app.config(function($routeProvider,$locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider.when('/',{
        templateUrl:'partials/principal.html',
        controller:'Center'
    })

    $routeProvider.when('/adicionar',{
        templateUrl:'partials/formAdd.html',
        controller:'Form'
    })


    $routeProvider.otherwise({
        redirectTo:'/'
    })
})

app.controller('Center',function($scope,$http){
    
    $scope.fotos = [];

    $scope.filtro = "";
    
    
   
    $http.get('http://localhost:3000/v1/fotos')
    .then(function(response){
        
        if(response.status = 200){
            console.log(response.data)
            $scope.fotos = response.data;
        }
        
    })

    
    

     
})


