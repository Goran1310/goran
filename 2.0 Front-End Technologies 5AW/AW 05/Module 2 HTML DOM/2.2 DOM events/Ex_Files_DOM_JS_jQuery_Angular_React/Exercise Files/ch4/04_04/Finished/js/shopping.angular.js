var myApp = angular.module("myShoppingApp",[]);

myApp.directive("mylist", function(){
   
    return {
        scope: true,  //false, true, {}
        restrict: 'E',
        //template: '<span ng-transclude></span><ol><li>Milk</li><li>Cheese</li><li>Eggs</li></ol>',
        templateUrl: 'list.html',
        replace: false,
        transclude: false,
    }
    
});

myApp.controller("MainController", function($scope){
   
    $scope.items = [        
        {name:"Milk", checked:false},
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