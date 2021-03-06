/**
 * Created by mohsennabian on 11/12/16.
 */
(function(){
    angular
        .module("ResearchApp")
        .controller("SearchController", SearchController);


    function SearchController(MitService,UserService,ColorService,$routeParams,$location) {


            console.log("hello from controller");
            var vm=this;
            vm.title=$routeParams.title;
            vm.searchArticleByTitle=searchArticleByTitle;
            vm.goToDetailPage=goToDetailPage;
            vm.findColor=findColor;
            vm.goToAuthorSummary=goToAuthorSummary;
            vm.pagenumber=parseInt($routeParams.pagenumber);
            console.log(vm.pagenumber);




            vm.userId=$routeParams.userId;
            vm.loggedin=false;
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

            if (isNaN(vm.pagenumber ))
            {
                vm.pagenumber=0;
                // console.log(vm.pagenumber);
                // console.log('david');
            }
            if (vm.pagenumber==0){
                console.log('Hashem');
                vm.firstPage=true;
            }
            if (vm.pagenumber!=0){
                console.log('Hashem');
                vm.firstPage=false;
            }


            if (vm.title!=null)
            {
                vm.searchArticleByTitle(vm.title,vm.pagenumber);
            }




            function searchArticleByTitle(title, pagenumber) {
                console.log(pagenumber);
                var url="https://api.crossref.org/works?query="+title+"&rows=20"+"&offset="+pagenumber+"&filter=has-orcid:true";

                response=MitService.searchArticleByTitle(url);

                response
                    .success(function(result){
                        console.log(result);
                        vm.articles=result.message.items;
                        if ($routeParams.title==null)
                        {

                            if (vm.userId==null)
                            {
                                $location.url("/search/" + title + "/" + pagenumber);
                            }
                            if (vm.userId!=null)

                            {
                                $location.url("/search/" + title + "/" + pagenumber+"/"+vm.userId);
                            }

                        }
                    })
            }



            function goToDetailPage(DOI,title,pagenumber){

                console.log('sandy');
                if (vm.userId!=null) {
                    $location.url("/details/"+DOI+"/"+title+"/"+pagenumber+"/"+vm.userId);
                }
                if (vm.userId==null) {
                    $location.url("/details/"+DOI+"/"+title+"/"+pagenumber);
                }
            }

            function findColor(DOI){
                if (vm.userId!=null) {
                    vm.color_selected=[];
                    DOI1 = DOI.split("/")[0];
                    DOI2 = DOI.split("/")[1];
                    console.log(DOI1, DOI2);
                    ColorService.findColorByUserId_ArticleDOI(vm.userId, DOI1, DOI2).success(function (color) {
                        // console.log(color);
                        vm.color_selected.push(color.colorNo);

                        return ('0');
                    })
                }
            }
            function goToAuthorSummary(){
                $location.url("/author/"+vm.userId);
            }

    }


})();