angular.module('Titulo',[]).directive('meuTitulo',function(){

    return {
        restrict:'AE',
        scope:{
            titulo:'@'
        },
        templateUrl:'js/directives/meu-titulo.html'
    }


})