/**
 * Created by mohsennabian on 11/12/16.
 */
(function() {
    angular
        .module("ResearchApp")
        .factory("EvaluationService",EvaluationService);

    function EvaluationService($http) {

        var api = {
            createEvaluation:createEvaluation,
            findEvaluationByUserId_ArticleDOI:findEvaluationByUserId_ArticleDOI,
            findEvaluationByArticleDOI:findEvaluationByArticleDOI
            // findColorById:findColorById,
            // updateColor:updateColor,
            // deleteColor:deleteColor
        };

        return api;


        function createEvaluation(evaluation) {
            return $http.post("/api/create/evaluation",evaluation);
        }

        function findEvaluationByUserId_ArticleDOI(userId,DOI1,DOI2) {
            console.log('service.client omid');
            console.log(userId,DOI1,DOI2);
            return $http.get("/api/find/evaluation/"+userId+"/"+DOI1+"/"+DOI2);
        }

        function findEvaluationByArticleDOI(DOI1,DOI2) {
            console.log('service.client omid');
            console.log(DOI1,DOI2);
            return $http.get("/api/find/evaluation/"+DOI1+"/"+DOI2);
        }



        // function findColorById(colorId) {
        //     return $http.get("/api/find/color/"+colorId);
        // }
        // function updateColor(color) {
        //     return $http.put("/api/update/color",color);
        // }
        // function deleteColor(colorId) {
        //     return $http.delete("/api/delete/"+colorId);
        // }
    }


})();