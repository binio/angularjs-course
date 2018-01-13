(function(){
    CustomersController.$inject = ['$scope', 'customersFactory','appName'];
    function CustomersController($scope, customersFactory, appName){
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appName = appName;

        function init(){
            customersFactory.getCustomers()
                .then(
                    function(customers){
                        $scope.customers = customers.data;
                        //console.log(customers.data);
                    },
                    function(data, status, header, config){
                        //todo
                    });


        };
        init();
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };
    app.controller('CustomersController', CustomersController);
})();