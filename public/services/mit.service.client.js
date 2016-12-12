/**
 * Created by mohsennabian on 12/8/16.
 */
/**
 * Created by mohsennabian on 11/12/16.
 */
(function() {
    angular
        .module("ResearchApp")
        .factory("MitService", MitService);

    function MitService($http) {

        var api = {
            searchArticleByTitle: searchArticleByTitle,
            searchArticleByDOIID: searchArticleByDOIID
        };

        return api;


        function searchArticleByTitle(url) {
            return $http.get(url);
        }

        function searchArticleByDOIID(url) {
            return $http.get(url);
        }
    }


})();