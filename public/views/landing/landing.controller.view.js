/**
 * Created by mohsennabian on 11/12/16.
 */
(function(){
    angular
        .module("ResearchApp")
        .controller("LandingSearchController", LandingSearchController);


    function LandingSearchController(UserService,$routeParams,$location) {


        console.log("hello from controller");
        var vm=this;
        vm.userId=$routeParams.userId;
        vm.loggedin=false;
        // vm.title=$routeParams.title;
        vm.searchArticleByTitle=searchArticleByTitle;
        // vm.findUserById=findUserById;
        // vm.pagenumber=parseInt($routeParams.page);


        function init(){
            if (vm.userId!=null){
                vm.loggedin=true;
                UserService.findUserById(vm.userId).success(function(user){
                    // console.log('babbbba');
                    // console.log(user);
                    vm.username=user.username;
                    // console.log('maman');
                    return('0');
                })
            }

        }
        init();


        // if (vm.pagenumber !=null)
        // {
        //     vm.pagenumber=999;
        //     console.log(vm.pagenumber);
        //     console.log('david');
        // }

        // if (isNaN(vm.pagenumber ))
        // {
        //     vm.pagenumber=0;
        //     console.log(vm.pagenumber);
        //     console.log('david');
        // }

        // if (vm.title!=null)
        // {
        //     vm.searchArticleByTitle(vm.title,vm.pagenumber);
        // }

        function searchArticleByTitle(title)
        {
            if (vm.userId!=null){
                $location.url("/search/" +title+"/0/"+vm.userId);
            }
            else {
                $location.url("/search/" + title + "/" + "0");
            }


        }
        // function findUserById(userId)
        // {
        //
        //     $location.url("/search/" +title+"/"+"0");
        //
        //
        // }
    }


})();
