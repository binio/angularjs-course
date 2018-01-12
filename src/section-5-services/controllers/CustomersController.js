(function(){
    CustomersController.$inject = ['$scope', 'customersService','appName'];
    function CustomersController($scope, customersService, appName){
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appName = appName;

        function init(){
            $scope.customers = customersService.getCustomers();
        };
        init();
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };
    app.controller('CustomersController', CustomersController);
})();