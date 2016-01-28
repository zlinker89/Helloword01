var app = angular.module("miApp", []);

app.factory("XLSXReaderService", ['$q', '$rootScope',
    function($q, $rootScope) {
        var service = function(data) {
            angular.extend(this, data);
        }

        service.readFile = function(file, readCells, toJSON) {
            var deferred = $q.defer();

            XLSXReader(file, readCells, toJSON, function(data) {
                $rootScope.$apply(function() {
                    deferred.resolve(data);
                });
            });

            return deferred.promise;
        }


        return service;
    }
]);

app.controller('PreviewController', function($scope, XLSXReaderService,$http) {
    $scope.showPreview = false;
    $scope.showJSONPreview = true;
    $scope.json_string = "";

    $scope.fileChanged = function(files) {
        $scope.isProcessing = true;
        $scope.sheets = [];
        $scope.excelFile = files[0];
        XLSXReaderService.readFile($scope.excelFile, $scope.showPreview, $scope.showJSONPreview).then(function(xlsxData) {
            $scope.sheets = xlsxData.sheets;
            $scope.isProcessing = false;
            // mi ediciones
            var obj = $scope.sheets["Sheet1"];
            console.log($scope.sheets["Sheet1"]);
            for (var i in obj) {
                var empleado = {
                    id: null,
                    Cedula: obj[i].Cedula,
                    Nombre: obj[i].Nombre,
                    tipo: obj[i].Type,
                    Departament: obj[i].Department,
                    Area: obj[i].Area,
                    SubArea: obj[i].SubArea,
                    CrewCd: obj[i]['Crew Cd'],
                    RosterPosition: obj[i]['Roster position'],
                    Unit: obj[i].Unit
                }
                //console.log(JSON.stringify(empleado));

                // le pongo el nombre del archivo
                document.getElementById("uploadFile").value = document.getElementById("uploadBtn").value;
                $http.post("/api/empleado/", empleado).then(function (data) {
                    console.log(JSON.stringify(data.data));
                });
            }
        });
    }

    //$scope.updateJSONString = function() {
    //    $scope.json_string = JSON.stringify($scope.sheets[$scope.selectedSheetName], null, 2);
    //}

    //$scope.showPreviewChanged = function() {
    //    if ($scope.showPreview) {
    //        $scope.showJSONPreview = false;
    //        $scope.isProcessing = true;
    //        XLSXReaderService.readFile($scope.excelFile, $scope.showPreview, $scope.showJSONPreview).then(function(xlsxData) {
    //            $scope.sheets = xlsxData.sheets;
    //            $scope.isProcessing = false;
    //        });
    //    }
    //}
});