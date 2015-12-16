FoorumApp.controller('UsersController', function ($scope, $location, Api) {
    // Toteuta kontrolleri tähän
    $scope.login = function () {
        Api.login($scope.newUser)
                .success(function (user) {
                    $location.path("/");
                })
                .error(function () {
                    $scope.message = "Väärä käyttäjätunnus tai salasana!";
                });
    }
    $scope.register = function () {
        if ($scope.newUser.password === $scope.passwordAgain) {
            Api.register($scope.newUser)
                    .success(function (user) {
                        $location.path("/");
                    })
                    .error(function () {
                        $scope.message = "Käyttäjätunnus on jo käytössä";
                    });
        }
    }
});
