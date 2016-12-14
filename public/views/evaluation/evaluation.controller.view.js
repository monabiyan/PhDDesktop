/**
 * Created by mohsennabian on 11/12/16.
 */


(function(){
    angular
        .module("ResearchApp")

        .controller("EvaluationController", EvaluationController);



    function EvaluationController(MitService,UserService,EvaluationService,ArticleService,NoteService,ColorService,$routeParams,$location ) {

        var vm = this;
        // vm.goBackToSearchPage = goBackToSearchPage;
        // vm.goToNewNote = goToNewNote;
        // vm.goToEditNote = goToEditNote;
        // vm.updateColor = updateColor;
        vm.saveAndBackToDetails=saveAndBackToDetails;

        vm.cancel=cancel;

        vm.DOI1 = $routeParams.DOI1;
        vm.DOI2 = $routeParams.DOI2;

        vm.DOI = vm.DOI1 + '/' + vm.DOI2;


        vm.title = $routeParams.title;
        vm.pagenumber = $routeParams.pagenumber;

        vm.userId = $routeParams.userId;
        vm.loggedin = false;

        vm.colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        vm.username= $routeParams.username;


        function init1() {

            if (vm.userId != null) {
                vm.loggedin = true;
                UserService.findUserById(vm.userId).success(function (user) {

                    vm.username = user.username;

                    return ('0');
                })
            }

        }
        init1();


        function init2() {
            var url = "http://api.crossref.org/works/DOI:" + vm.DOI;
            response = MitService.searchArticleByDOIID(url);
            response
                .success(function (result) {
                    vm.article = result;

                })
        }

        init2();



        function saveAndBackToDetails(){
            if (vm.loggedin == false) {
                $location.url("/login")
            }
            if (vm.loggedin == true) {

              evaluation={

                  eval1:vm.eval1,
                  eval2:vm.eval2,
                  eval3:vm.eval3,
                  eval4:vm.eval4,
                  DOI1:vm.DOI1,
                  DOI2:vm.DOI2,
                  userId:vm.userId,
                    username:vm.username};


                EvaluationService.createEvaluation(evaluation).success(function(evaluationObj)
                {
                    console.log(evaluationObj);
                    $location.url("/details/" + vm.DOI1 + "/" + vm.DOI2 + "/" + vm.title + "/" + vm.pagenumber + "/" + vm.userId);

                });
            }
        }
        function cancel(){

            $location.url("/details/" + vm.DOI1 + "/" + vm.DOI2 + "/" + vm.title + "/" + vm.pagenumber + "/" + vm.userId);


            }



    }

})();
