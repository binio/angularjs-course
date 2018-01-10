(function(){
    CustomersController.$inject = ['$scope', 'customersFactory'];
    function CustomersController($scope, customersFactory){
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];

        function init(){
            $scope.customers = customersFactory.getCustomers();
        };
        init();
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };
    app.controller('CustomersController', CustomersController);
})();