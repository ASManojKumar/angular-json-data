var app = angular.module('myApp', []);
app.controller('resumeData', ['$scope', '$http',
    function($scope, $http) {
        $scope.person = {
            firstName: 'Manoj',
            educationalQualification: 'B.Tech',
            workingExperience: 2,
            skills: ['HTML', 'CSS', 'Bootstrap', 'Angular JS', 'Material Design']
        };
    }
]);