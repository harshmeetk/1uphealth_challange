
(function () {
    angular
        .module("PatientSearch")
        .factory("SearchService",SearchService);

    var patId = null
    var accessToken = null
    var name = null
    function SearchService($http) {
        var api={
            search:search,
            searchPatients: searchPatients,
            setParams : setParams,
            getParams : getParams
        };
        return api;

        function setParams(patId, accessToken, name) {
            this.patId = patId;
            this.accessToken = accessToken
            this.name = name
        }

        function getParams() {
            return {
                patId: this.patId,
                accessToken : this.accessToken,
                name : this.name
            }
        }
        function search(patientToSearch) {
            return $http.post("/api/v1/patsearch",patientToSearch);
        }

        function searchPatients(patientToSearch) {
            return $http.post("/api/v1/allpats",patientToSearch);
        }
    }
})();
