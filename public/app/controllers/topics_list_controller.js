FoorumApp.controller('TopicsListController', function ($scope, $location, Api) {
    // Toteuta kontrolleri tähän
    $scope.getTopics = Api.getTopics().success(function (data, status, headers, config) {
        $scope.topics = data;
    }).error(function (data, status, headers, config) {
    });
    $scope.addTopic = function () {
        Api.addTopic($scope.newTopic).success(function (data, status, headers, config) {
            $location.path("/topics/" + data.id);
        });
    };
});
