
var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

angularFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController"
        })
        .when("/newEmployeeForm", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .when("/updateEmployeeForm/:id", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

angularFormsApp.controller("HomeController",
    function ($scope, $location, $modal, DataService) {

        $scope.showCreateEmployeeForm = function () {
            //$location.path('/newEmployeeForm');

            $modal.open({
                templateUrl: 'app/EmployeeForm/efTemplate.html', 
                controller: 'efController' 
            });

        };

        $scope.showUpdateEmployeeForm = function (id) {
            //$location.path('/updateEmployeeForm/' + id
            //var modelScope = $scope.$new(true);

            //modelScope.empID = id;
            
            $modal.open({
                templateUrl: 'app/EmployeeForm/efTemplate.html',
                controller: 'efController',
                //scope: modelScope,
                resolve: {
                    employee: function () {
                        return DataService.getEmployee(id);
                    }
                }
            });
        };

    });

