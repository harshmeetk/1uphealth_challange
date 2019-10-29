
(function () {
    angular
        .module("PatientSearch")
        .controller("patientSearchController", patientSearchController);

    /**
     *
     * @param SearchService
     * @param $sce
     * @param $location
     */
    function patientSearchController(SearchService, $sce, $location) {
        let vm = this;
        vm.search = search;
        vm.inc = inc;
        vm.dec = dec;
        vm.show = true;
        vm.page = 0;
        vm.search_params = null;
        vm.searchEverything = searchEverything;
        function search(patientToSearch) {
            vm.pats = [];
            vm.search_params = patientToSearch;
            patientToSearch.page = vm.page;
            //Use of promises here.
            SearchService.searchPatients(patientToSearch)
                .success(function (result) {
                    if (result.patients.length > 0)
                    {
                        vm.showAuthPats = true;
                        vm.authPats = result.patients;
                        vm.error = undefined
                    }
                    else {
                        vm.error = result.errors
                    }
                })
                .error(function (error) {
                    console.log("error in searchController");
                })
        }

        /**
         *
         * @param patient
         */
        function searchEverything(patient) {
            SearchService.setParams(patient.patient_id, vm.patients.accessToken, patient.patient_name);
            $location.url("/search");
        }

        function inc() {
            vm.page = vm.page + 10;
            search(vm.search_params)

        }
        function dec() {
            vm.page = vm.page - 10;
            search(vm.search_params)
        }
    }
})();
