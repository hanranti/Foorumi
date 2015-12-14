FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    // Toteuta kontrolleri tähän
    $scope.getTopic = Api.getTopic($routeParams.id)
            .success(function (data, status, headers, config) {
                $scope.topic = data;
                $scope.messages = data.Messages;
            });
    $scope.addMessage = function () {
        Api.addMessage($scope.newMessage, $routeParams.id).then(function (message) {
            $scope.messages.push(message.data);
            $location.path("/messages/" + message.data.id);
        });
    }
});
