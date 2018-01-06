(function() {
    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            controller: 'CustomersController',
            templateUrl: 'views/customers.html'
        }).otherwise({redirectTo: '/'});

    });

})();