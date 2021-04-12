angular.module('minhasDiretivas',[]).directive('meuPainel',function(){

    let ddo =  {
        restrict:'AE',
        scope:{
            titulo:'@'
        },
        transclude:true

    }

    ddo.templateUrl = 'js/directives/meu-painel.html'
   

    return ddo;
})