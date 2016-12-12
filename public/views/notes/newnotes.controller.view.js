/**
 * Created by mohsennabian on 11/12/16.
 */
(function(){
    angular
        .module("ResearchApp")
        .controller("NewNoteController", NewNoteController);


    function NewNoteController(UserService,$routeParams,$location,NoteService) {


        console.log("hello from controller");
        var vm=this;
        vm.createNote=createNote;
        // vm.title=$routeParams.title;
        // vm.searchArticleByTitle=searchArticleByTitle;
        // vm.findUserById=findUserById;
        // vm.pagenumber=parseInt($routeParams.page);



        vm.userId=$routeParams.userId;
        vm.loggedin=false;
        vm.DOI1=$routeParams.DOI1;
        vm.DOI2=$routeParams.DOI2;
        vm.pagenumber=$routeParams.pagenumber;
        vm.title=$routeParams.title;


        vm.note={userId:vm.userId,DOI1:vm.DOI1,DOI2:vm.DOI2}


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

        function createNote(){


            NoteService.createNote(vm.note).success(function(noteObj){
                console.log(noteObj);
                $location.url("/details/"+vm.DOI1+"/"+vm.DOI2+"/"+vm.title+"/"+vm.pagenumber+"/"+vm.userId);
            })
        }


        // _user
        // content
        // _article

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

        // function searchArticleByTitle(title)
        // {
        //     if (vm.userId!=null){
        //         $location.url("/search/" +title+"/0/"+vm.userId);
        //     }
        //     else {
        //         $location.url("/search/" + title + "/" + "0");
        //     }
        //
        //
        // }
        // function findUserById(userId)
        // {
        //
        //     $location.url("/search/" +title+"/"+"0");
        //
        //
        // }
    }


})();
