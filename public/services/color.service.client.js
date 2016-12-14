/**
 * Created by mohsennabian on 11/12/16.
 */
(function() {
    angular
        .module("ResearchApp")
        .factory("ColorService",ColorService);

    function ColorService($http) {

        var api = {
            createColor:createColor,
            findColorByUserId_ArticleDOI:findColorByUserId_ArticleDOI,
            findColorById:findColorById,
            findColorsByUserId:findColorsByUserId,
            updateColor:updateColor,
            deleteColor:deleteColor
        };

        return api;


        function createColor(color) {
            return $http.post("/api/create/color",color);
        }

        function findColorByUserId_ArticleDOI(userId,DOI1,DOI2) {
            console.log('service.client omid');
            console.log(userId,DOI1,DOI2);
            return $http.get("/api/find/color/"+userId+"/"+DOI1+"/"+DOI2);
        }
        function findColorById(colorId) {
            return $http.get("/api/find/color/"+colorId);
        }
        function updateColor(color) {
            return $http.put("/api/update/color",color);
        }
        function deleteColor(colorId) {
            return $http.delete("/api/delete/"+colorId);
        }
        function findColorsByUserId(userId){
            return $http.get("/api/findall/colors/"+userId);
        }
    }


})();