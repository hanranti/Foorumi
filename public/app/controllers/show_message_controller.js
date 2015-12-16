FoorumApp.controller('ShowMessageController', function ($scope, $routeParams, Api) {
    // Toteuta kontrolleri tähän
    $scope.getMessage = Api.getMessage($routeParams.id).success(function (data, status, headers, config) {
        $scope.message = data;
    });
    $scope.addReply = function () {
        Api.addReply($scope.newReply, $routeParams.id).then(function (reply){
            $scope.message.Replies.push(reply.data);
        });
    }
});
