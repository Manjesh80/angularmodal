
angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams, $modalInstance, DataService, employee) {

        //alert($scope.empID);

        //if ($scope.empID)
        //    $scope.employee = DataService.getEmployee($scope.empID);
        //else
        //    $scope.employee = { id: 0 };

        $scope.employee = employee || { id: 0 };

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ];

        $scope.submitForm = function () {

            if ($scope.editableEmployee.id == 0) {
                // insert new employee
                DataService.insertEmployee($scope.editableEmployee);
            }
            else {
                // update the employee
                DataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
            //$window.history.back();

            $modalInstance.close();
        };

        $scope.cancelForm = function () {
            //$window.history.back();

            $modalInstance.dismiss();
        };

    });