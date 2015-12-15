FoorumApp.controller('UsersController', function ($scope, $location, Api) {
    // Toteuta kontrolleri tähän
    $scope.login = function () {
        Api.login($scope.newUser).success(function (user) {
            console.log(user);
        });
    }
    $scope.register = function () {
        Api.register($scope.newUser).success(function (user) {
            console.log(user);
        });
    }
});
