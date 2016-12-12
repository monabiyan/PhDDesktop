/**
 * Created by mohsennabian on 11/12/16.
 */
(function() {
    angular
        .module("ResearchApp")
        .factory("ArticleService", ArticleService);

    function ArticleService($http) {

        var api = {
            createArticle: createArticle,
            findArticleByDOI: findArticleByDOI,
            updateArticle:updateArticle,
            deleteArticle:deleteArticle
        };

        return api;

        function createArticle(article) {

            return $http.post("/api/create/article",article);
        }
        function findArticleByDOI(DOI) {

            url="/api/find/article/"+DOI;
            return $http.get(url);
        }
        function updateArticle(article) {

            return $http.put("/api/update/article",article);
        }
        function deleteArticle(articleId) {

            return $http.delete("/api/delete/article/"+articleId);
        }

    }

})();