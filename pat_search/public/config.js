
(function() {
    angular
        .module("PatientSearch")
        .config(Config);
    function Config($routeProvider) {
        $routeProvider
            .when("/search", {
                templateUrl: "views/search.view.client.html",
                controller:"searchController",
                controllerAs :"model"
            })
            .when("/getallpatients", {
                templateUrl: "views/patients.view.client.html",
                controller:"patientSearchController",
                controllerAs :"model"
            })
            .otherwise({
                redirectTo: "/getallpatients"
            })

    }
})();
