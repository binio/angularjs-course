(function(){
    OrdersController.$inject($scope,$routeParams);
    function OrdersController($scope,$routeParams){
        var customerId = $routeParams.customerId;
        $scope.orders = null;
        $scope.customers = [
            {joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956, orders:[
                    {id:1,product:'product 1', total:123},
                    {id:1,product:'product 1', total:123},
                    {id:1,product:'product 1', total:123} ]
            },
            {joined: '1965-01-25', name: 'Zed', city: 'Las Vegas', orderTotal: 19.99, orders:[
                    {id:1,product:'product 12', total:123},
                    {id:1,product:'product 12', total:123},
                    {id:1,product:'product 12', total:123} ]
            },
            {joined: '1944-06-15', name: 'Tina', city: 'New York', orderTotal: 44.99, orders:[
                    {id:1,product:'product 13', total:123},
                    {id:1,product:'product 13', total:123},
                    {id:1,product:'product 13', total:123} ]
            },
            {joined: '1995-03-28', name: 'Dave', city: 'Seattle', orderTotal: 101.50, orders:[
                    {id:1,product:'product 14', total:123},
                    {id:1,product:'product 14', total:123},
                    {id:1,product:'product 14', total:123} ]
            }
        ];
    };
    app.controller('OrdersController', OrdersController);
})();