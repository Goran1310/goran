var myApp = angular.module("myShoppingApp",[]);

myApp.controller("MainController", function($scope){
   
    $scope.items = [        
        {name:"Milk", checked:true},
        {name:"Eggs", checked:false},
        {name:"Cheese", checked:false},
        {name:"Bread", checked:false}    
    ];
    
    $scope.newItem = "";
    
    $scope.addItemToList = function(){
        
        if($scope.newItem.trim() != ""){
            $scope.items.push(
                {name:$scope.newItem, checked:false}
            );
            $scope.newItem="";
        }
    }
    
    $scope.removeItem = function(index){
        $scope.items.splice(index,1);
    }
    
});