/**
 * Created by aldrinh on 2/25/15.
 */
var app = angular.module('alApp');

app.directive('theTime', function() {
    return {
        restrict: 'E',
        template: 'The current time is: {{time | date:"MM/dd/yyyy \'at\' h:mma"}}',
        link: function(scope, element, attrs) {
            var currentTime = new Date();
            scope.time = Date.now();
        }
    }
});