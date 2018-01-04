//---- old way of defining controller in Angular 1.2
// function CustomersController($scope) {
//     $scope.customers = [
//         {joined:'2000-12-10', name:'thomas', city:'london', orderTotal:2001},
//         {joined:'2000-10-10', name:'adam', city:'sutton', orderTotal:2001},
//         {joined:'2000-12-11', name:'john', city:'croydon', orderTotal:2001}
//     ];
//     $scope.doSort = function(propName){
//         $scope.sortBy = 'name';
//         $scope.reverse = dalse;
//         $scope.sortBy = propname;
//         $scope.reverse != $scope.reverse;
//     };
// }
// ( function() {
//
//     angular.module('customersApp', []).controller('CustomersController', ['$scope', function ($scope) {
//         $scope.sortBy = 'name';
//         $scope.reverse = false;
//         $scope.customers = [
//             {joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956},
//             {joined: '1965-01-25', name: 'Zed', city: 'Las Vegas', orderTotal: 19.99},
//             {joined: '1944-06-15', name: 'Tina', city: 'New York', orderTotal: 44.99},
//             {joined: '1995-03-28', name: 'Dave', city: 'Seattle', orderTotal: 101.50}
//         ];
//         $scope.doSort = function (propName) {
//             $scope.sortBy = propName;
//             $scope.reverse = !$scope.reverse;
//         };
//     }]);
// })();


// (function(){
//     var CustomersController = function ($scope) {
//         $scope.sortBy = 'name';
//         $scope.reverse = false;
//         $scope.customers = [
//             {joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956},
//             {joined: '1965-01-25', name: 'Zed', city: 'Las Vegas', orderTotal: 19.99},
//             {joined: '1944-06-15', name: 'Tina', city: 'New York', orderTotal: 44.99},
//             {joined: '1995-03-28', name: 'Dave', city: 'Seattle', orderTotal: 101.50}
//         ];
//         $scope.doSort = function (propName) {
//             $scope.sortBy = propName;
//             $scope.reverse = !$scope.reverse;
//         };
//     };
//     CustomersController.$inject = ['$scope'];
//     angular.module('customersApp',[]).controller('CustomersController', CustomersController);
// })();

(function(){
    CustomersController.$inject = ['$scope'];
    function CustomersController ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [
            {joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956},
            {joined: '1965-01-25', name: 'Zed', city: 'Las Vegas', orderTotal: 19.99},
            {joined: '1944-06-15', name: 'Tina', city: 'New York', orderTotal: 44.99},
            {joined: '1995-03-28', name: 'Dave', city: 'Seattle', orderTotal: 101.50}
        ];
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    angular.module('customersApp',[]).controller('CustomersController', CustomersController);
})();