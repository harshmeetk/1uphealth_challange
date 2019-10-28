
(function () {
    angular
        .module("PatientSearch")
        .controller("searchController", searchController);

    function searchController(SearchService, $sce) {
        var vm = this;
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
                        // for (var tweet in tweets) {
                        //     var temp = tweets[tweet].split(" ");
                        //     var result = "";
                        //     //Creating Dynamic hyperlinks for Hashtags and Mentions
                        //     for (var t of temp) {
                        //         if (t.startsWith("@") || t.startsWith("#")) {
                        //             t = '<a id=' + t + ' onclick=tempFunction("'+t+'")>' + t + '</a>';
                        //         }
                        //         result = result + " " + t;
                        //     }
                        //     //using Angular to make it a trusted HTML for injection.
                        //     tweets[tweet] = $sce.trustAsHtml(result.substring(1));
                        // }
                        vm.patList = result.patients.entry;
                        console.log(vm.pats)
                        // const formatter = new JSONFormatter(vm.tweets);
                        // document.body.appendChild(formatter.render());


                        // var obj = {a:1, 'b':'foo', c:[false,null, {d:{e:1.3e5}}]};
                        // $scope.json = obj;
                    }
                    //No results found
                    else {
                        vm.error = "No Results found :(";
                    }
                })
                .error(function (error) {
                    console.log("error in searchController");
                })
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
            search(SearchService.getParams())
        }

        init()
    }
   // }
})();
