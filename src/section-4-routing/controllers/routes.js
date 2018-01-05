(function() {
    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'CustomersController',
            templateUrl: 'views/customers.html'
        }).otherwise({redirectTo: '/'});
        //     .when('/orders',{
        //     controller: 'OrdersController',
        //     templateUrl: 'app/views/orders.html'
        // }).otherwise({redirectTo: '/'});
    });

})();