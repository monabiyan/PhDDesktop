(function() {
    angular
        .module("ResearchApp")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/landing",{
                templateUrl:"./views/landing/landing.view.html",
                controller:"LandingSearchController",
                controllerAs: "model"
            })

            .when("/landing/:userId",{
                templateUrl:"./views/landing/landing.view.html",
                controller:"LandingSearchController",
                controllerAs: "model"
            })

            .when("/search",{
                templateUrl:"./views/search/search.view.html",
                controller:"SearchController",
                controllerAs: "model"
            })

            .when("/search/:title",{
                templateUrl:"./views/search/search.view.html",
                controller:"SearchController",
                controllerAs: "model"
            })
            .when("/search/:title/:pagenumber",{
                templateUrl:"./views/search/search.view.html",
                controller:"SearchController",
                controllerAs: "model"
            })
            .when("/search/:title/:pagenumber/:userId",{
                templateUrl:"./views/search/search.view.html",
                controller:"SearchController",
                controllerAs: "model"
            })

            .when("/search/:title/:article",{
                templateUrl:"./views/search/search.view.html",
                controller:"SearchController",
                controllerAs: "model"
            })

            .when("/details/:DOI1/:DOI2/:title/:pagenumber", {
                templateUrl: "./views/details/details.view.html",
                controller: "DetailsController",
                controllerAs: "model"
            })

            .when("/details/:DOI1/:DOI2/:title/:pagenumber/:userId", {
                templateUrl: "./views/details/details.view.html",
                controller: "DetailsController",
                controllerAs: "model"
            })

            .when("/login",{
                templateUrl: "./views/login/login.view.html",
                controller: "LoginController",
                controllerAs: "model"
            })

            .when("/register",{
                templateUrl: "./views/register/register.view.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/newnote/:DOI1/:DOI2/:title/:pagenumber/:userId",{
                templateUrl: "./views/notes/author.view.html",
                controller: "NewNoteController",
                controllerAs: "model"
            })
            .when("/editnote/:DOI1/:DOI2/:title/:pagenumber/:userId/:noteId",{
                templateUrl: "./views/notes/edit_notes.view.html",
                controller: "EditNoteController",
                controllerAs: "model"
            })

            .when("/evaluation/:DOI1/:DOI2/:title/:pagenumber/:userId", {
                templateUrl: "./views/evaluation/evaluation.view.html",
                controller: "EvaluationController",
                controllerAs: "model"
            })
            .when("/author/:userId", {
                templateUrl: "./views/author/author.view.html",
                controller: "AuthorController",
                controllerAs: "model"
            })


            .otherwise({
                redirectTo: "/landing"
            });
    }
})();