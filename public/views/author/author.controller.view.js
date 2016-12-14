/**
 * Created by mohsennabian on 11/12/16.
 */
(function(){
    angular
        .module("ResearchApp")
        .controller("AuthorController", AuthorController);


    function AuthorController(UserService,$routeParams,$location,NoteService) {


        console.log("hello from controller");
        var vm=this;
        vm.backToSearch=backToSearch;
        // vm.title=$routeParams.title;
        // vm.searchArticleByTitle=searchArticleByTitle;
        // vm.findUserById=findUserById;
        // vm.pagenumber=parseInt($routeParams.page);



        vm.userId=$routeParams.userId;
        vm.loggedin=false;

        vm.pagenumber=$routeParams.pagenumber;
        vm.title=$routeParams.title;



        vm.note={userId:vm.userId,DOI1:vm.DOI1,DOI2:vm.DOI2};


        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }


        function init(){
            console.log('shaghayegh');
            if (vm.userId!=null){
                vm.loggedin=true;
                UserService.findUserById(vm.userId).success(function(user){
                    // console.log('babbbba');
                    // console.log(user);
                    vm.DOIs=user.DOIs.filter( onlyUnique );

                    console.log(vm.DOIs);
                    return('0');
                })
            }

        }
        init();

        function backToSearch(){
            $location.url("/landing/"+vm.userId);
        }



    }


})();
