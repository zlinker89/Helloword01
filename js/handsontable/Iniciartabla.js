var hot;

angular.module("miApp", []).controller("tabla", function ($scope,$http) {
        $http.get('/api/empleado/').then(function (d) {
            var hotElement = document.getElementById('example');
            hot = new Handsontable(hotElement, {
                data: d.data, // see the Data tab
                columns: [
                    {
                        data: "idempleado",
                        type: "text",
                    },
                    {
                        data: "cedula",
                        type: "text",
                    },
                    {
                        data: "nombre",
                        type: "text"
                    },
                    {
                        data: "tipo",
                        type: "text"
                    },
                    {
                        data: "departament",
                        type: "text"
                    },
                    {
                        data: "area",
                        type: "text"
                    },
                    {
                        data: "subarea",
                        type: "text"
                    },
                    {
                        data: "crewcd",
                        type: "text"
                    },
                    {
                        data: "rosterposition",
                        type: "text"
                    },
                    {
                        data: "unit",
                        type: "text"
                    }
                ],
                stretchH: "all",
                rowHeaders: true,
                columnSorting: true,
                colHeaders: [
                    "ID",
                    "Cedula",
                    "Nombre",
                    "Type",
                    "Departament",
                    "Area",
                    "SubArea",
                    "Crew Cd",
                    "Roster position",
                    "Unit"
                ],
            });
        });
    
    
});