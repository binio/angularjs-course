
function CustomersController($scope) {
    $scope.customers = [
        {joined:'2000-12-10', name:'thomas', city:'london', orderTotal:2001},
        {joined:'2000-10-10', name:'adam', city:'sutton', orderTotal:2001},
        {joined:'2000-12-11', name:'john', city:'croydon', orderTotal:2001}
    ];
    $scope.doSort = function(propName){
        $scope.sortBy = 'name';
        $scope.reverse = dalse;
        $scope.sortBy = propname;
        $scope.reverse != $scope.reverse;
    };
}