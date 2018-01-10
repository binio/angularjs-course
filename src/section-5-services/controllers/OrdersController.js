(function(){
    OrdersController.$inject = ['$scope','$routeParams','customersFactory'];
    function OrdersController($scope, $routeParams, customersFactory){
        $scope.customer = null;
        var customerId = $routeParams.customerId;

        function init(){
            $scope.customer = customersFactory.getCustomer(customerId);
        };


        init();
    };
    app.controller('OrdersController', OrdersController);
})();