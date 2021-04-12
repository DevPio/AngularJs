angular.module('Foto',[]).directive('minhaFoto',function(){

    return {
        restrict:'AE',
        templateUrl:'js/directives/minha-foto.html',
        scope:{
            url:"@",
            alt:'@'
        }
    }
})