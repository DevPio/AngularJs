angular.module('cabecalho',[]).directive('meuCabelho',function(){


    return {
        restrict:'AE',
        templateUrl:'js/directives/meu-cabelho.html',
        transclude:true

    }
})