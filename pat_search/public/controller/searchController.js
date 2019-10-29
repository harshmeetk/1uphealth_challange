
(function () {
    angular
        .module("PatientSearch")
        .controller("searchController", searchController);

    function searchController(SearchService, $sce) {
        let vm = this;
        vm.search = search;
        vm.inc = inc;
        vm.dec = dec;
        vm.show = true;
        vm.page = 0;
        vm.search_params = null;
        vm.patList = [];
        function search(patientToSearch) {

            vm.search_params = patientToSearch;
            patientToSearch.page = vm.page;
            //Use of promises here.
            SearchService.search(patientToSearch)
                .success(function (result) {
                    if (result.patients.entry.length > 0) {
                        vm.error = undefined;
                        vm.show = undefined;
                        vm.showResults = true;
                        vm.patList = result.patients.entry;
                        containsNextPage(result.patients.total);
                        containsPrevtPage()

                    }
                    //No results found
                    else {
                        vm.error = result.error;
                    }
                })
                .error(function (error) {
                    console.log("error in searchController");
                })
        }

        function containsNextPage(total) {
            if(vm.page + 10 < total) {
                vm.hasNext = true
            }
            else {
                vm.hasNext = undefined
            }
        }

        function containsPrevtPage() {
            if(vm.page >= 10) {
                vm.hasPrev = true
            }
            else {
                vm.hasPrev = undefined
            }
        }
        function inc() {
            vm.page = vm.page + 10;
            search(vm.search_params)

        }

        function dec() {
            vm.page = vm.page - 10;
            search(vm.search_params)
        }

        function init() {
            console.log(SearchService.getParams());
            vm.patList.accessToken = SearchService.getParams().accessToken;
            vm.patList.pId = SearchService.getParams().pId;
            vm.patList.name = SearchService.getParams().name;
            console.log("name" ,vm.patList.name);
            search(SearchService.getParams())
        }

        init()
    }
})();
