angular.module('AluraPic').controller('Form',function($scope,$http){

    let inputForm = document.querySelector('input[type=file]')
    
    
    $scope.foto = {
        url:'',
        titulo:'',
        descricao:''
    }

    $scope.blobUrl= function(){
       let file = inputForm.files[0];
     
       
       let transFile = new FileReader();
       if(file){
        transFile.onloadend = function(){
            console.log($scope)
            console.log(transFile.result)
            $scope.foto.url = String(transFile.result);
        }
 
        transFile.readAsDataURL(file);

       }
       
    }

    $scope.sendData = function(){

       if($scope.formulario.$valid){
        $http.post('v1/fotos',$scope.foto).success(function(data){
            console.log(data)
            }).error(function(data){
                console.log(data)
            })
       }

       

    }
    

})