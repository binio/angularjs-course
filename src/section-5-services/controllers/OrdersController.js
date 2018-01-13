(function(){
    OrdersController.$inject = ['$scope','$routeParams','customersFactory'];
    function OrdersController($scope, $routeParams, customersFactory){
        $scope.customer = null;
        var customerId = $routeParams.customerId;

        function init(){
            customersFactory.getCustomer(customerId).then(
                function(customer){
                    $scope.customer = customer.data;
                    console.log(customer.data);
                },
                function(){}
            );
        };


        init();
    };
    app.controller('OrdersController', OrdersController);
})();