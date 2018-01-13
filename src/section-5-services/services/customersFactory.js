(function(){
    var customersFactory = function($http){
        var customers =  null;

        var factory = {};
        factory.getCustomers = function(){
            return $http.get('/customers');
        };

        factory.getCustomer = function(customerId){
            return $http.get('/customers/' + customerId);
        };

        return factory;
    };
    customersFactory.$inject = ['$http'];
    app.factory('customersFactory', customersFactory);
})();