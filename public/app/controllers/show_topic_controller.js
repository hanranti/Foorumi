FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    // Toteuta kontrolleri tähän
    $scope.getTopic = Api.getTopic($routeParams.id)
            .success(function (data, status, headers, config) {
                $scope.topic = data;
                $scope.messages = data.Messages;
            });
    $scope.addMessage = Api.addMessage($scope.newMessage, $routeParams.id);
});
