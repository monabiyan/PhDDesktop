/**
 * Created by mohsennabian on 11/12/16.
 */


(function(){
    angular
        .module("ResearchApp")

        .controller("DetailsController", DetailsController);



    function DetailsController(MitService,UserService,ArticleService,NoteService,ColorService,EvaluationService,$routeParams,$location ) {

        var vm = this;
        vm.goBackToSearchPage = goBackToSearchPage;
        vm.goToNewNote = goToNewNote;
        vm.goToEditNote = goToEditNote;
        vm.updateColor = updateColor;
        vm.goToEvaluationPage=goToEvaluationPage;
        vm.authorshipRequest=authorshipRequest;

        vm.checkAuthor=checkAuthor;
        vm.DOI1 = $routeParams.DOI1;
        vm.DOI2 = $routeParams.DOI2;


        vm.DOI = vm.DOI1 + '/' + vm.DOI2;


        vm.title = $routeParams.title;
        vm.pagenumber = $routeParams.pagenumber;

        vm.userId = $routeParams.userId;
        vm.loggedin = false;
        vm.authorship_request=false;

        vm.colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        // vm.article_title=vm.article.message.title[0];


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
            var url = "https://api.crossref.org/works/DOI:" + vm.DOI;
            response = MitService.searchArticleByDOIID(url);
            response
                .success(function (result) {
                    vm.article = result;

                })
        }

        init2();


        function init3() {
            NoteService.findNotesByUserId_ArticleDOI(vm.userId, vm.DOI1, vm.DOI2).success(function (notelist) {
                vm.notes = notelist;
            })
        }

        init3();


        function init4() {

            if (vm.userId != null) {
                vm.loggedin = true;
                console.log('baba');
                ColorService.findColorByUserId_ArticleDOI(vm.userId, vm.DOI1, vm.DOI2).success(function (color) {
                    console.log(color);
                    vm.color_selected = color.colorNo;

                    return ('0');
                })
            }

        }

        init4();



        function init5() {


                console.log('baba');
                EvaluationService.findEvaluationByArticleDOI(vm.DOI1, vm.DOI2).success(function (evaluations) {
                    console.log('neda');
                    console.log(evaluations);
                    vm.evaluations = evaluations;

                    return ('111');
                })

        }

        init5();


        function goBackToSearchPage(title, pagenumber) {
            if (vm.userId != null) {
                $location.url("/search/" + title + "/" + pagenumber + "/" + vm.userId);
            }
            if (vm.userId == null) {
                $location.url("/search/" + title + "/" + pagenumber);
            }

        }

        function goToNewNote() {
            if (vm.loggedin == false) {
                $location.url("/login")
            }
            if (vm.loggedin == true) {
                // var article={DOI1:vm.DOI1,DOI2:vm.DOI2};
                // ArticleService.createArticle(article).success(function(article){
                //
                //     vm._articleId=article._id;
                //
                $location.url("/newnote/" + vm.DOI1 + "/" + vm.DOI2 + "/" + vm.title + "/" + vm.pagenumber + "/" + vm.userId+"/"+vm.article.message.title[0]);

            }

        }

        function goToEditNote(noteId) {
            if (vm.loggedin == false) {
                $location.url("/login")
            }
            if (vm.loggedin == true) {
                // var article={DOI1:vm.DOI1,DOI2:vm.DOI2};
                // ArticleService.createArticle(article).success(function(article){
                //
                //     vm._articleId=article._id;
                //
                $location.url("/editnote/" + vm.DOI1 + "/" + vm.DOI2 + "/" + vm.title + "/" + vm.pagenumber + "/" + vm.userId + "/" + noteId);

            }

        }

        function updateColor(color_value) {

            cc = {colorNo: color_value, userId: vm.userId, DOI1: vm.DOI1, DOI2: vm.DOI2};
            // console.log(cc);
            ColorService.findColorByUserId_ArticleDOI(vm.userId, vm.DOI1, vm.DOI2).success(function (colorObj) {

                if (colorObj=="0"){
                    ColorService.createColor(cc).success(function (colorObj2) {
                        console.log('hamid');
                        console.log(colorObj2);
                        vm.color_selected=color_value;
                    });

                }
                else {
                    colorObj.colorNo=color_value;
                    ColorService.updateColor(colorObj).success(function(colorObj2){

                                    console.log('iman');
                                    console.log(colorObj2);
                            vm.color_selected=color_value;
                            // $location.url("/details/"+vm.DOI1 + "/" + vm.DOI2 +"/"+vm.title+"/"+vm.pagenumber+"/"+vm.userId);
                            window.location.reload();
                            return('0')


                                }
                                )}
            });}

        function goToEvaluationPage(){
            if (vm.loggedin == false) {
                $location.url("/login")
            }
            if (vm.loggedin == true) {

                $location.url("/evaluation/" + vm.DOI1 + "/" + vm.DOI2 + "/" + vm.title + "/" + vm.pagenumber + "/" + vm.userId+"/"+vm.username);

            }
        }

        function addDOItoUser(userId,DOI) {
            UserService.addDOItoUser(userId,DOI).success(function(userObj){
                console.log(userObj);
            })
        }

        function authorshipRequest() {
            vm.authorship_request=!vm.authorship_request;
            return(true)
        }






        function checkAuthor(info){

            if (vm.loggedin == false) {
                $location.url("/login")
            }
            if (vm.loggedin == true) {
                if (info==(vm.DOI1+"/"+vm.DOI2)) {

                    console.log('Its right');
                    DOI=vm.DOI1+"/"+vm.DOI2;

                    UserService.addDOItoUser(vm.userId,DOI,vm.article.message.title[0]).success(function(userObj){
                        console.log(userObj);
                        // $location.url("/details/" + vm.DOI1 + "/" + vm.DOI2 + "/" + vm.title + "/" + vm.pagenumber + "/" + vm.userId);
                        vm.authorship_request=false;
                        vm.DOIcheck=true;
                    });
                    // $location.url("/evaluation/" + vm.DOI1 + "/" + vm.DOI2 + "/" + vm.title + "/" + vm.pagenumber + "/" + vm.userId);
                }
                if (info!=(vm.DOI1+"/"+vm.DOI2)) {
                    vm.DOIcheck=false;
                    console.log('Its wrong!!');
                    // $location.url("/evaluation/" + vm.DOI1 + "/" + vm.DOI2 + "/" + vm.title + "/" + vm.pagenumber + "/" + vm.userId);
                }
            }
        }


    }

})();