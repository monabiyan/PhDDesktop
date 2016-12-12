/**
 * Created by mohsennabian on 11/26/16.
 */
(function(){
    angular
        .module("ResearchApp")
        .controller("LoginController", LoginController)


    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

        function login(username, password) {

            var promise = UserService.findUserByCredentials(username, password);
            promise
                .success(function(user)
                {
                    if(user =='0')
                    {
                        vm.error = "No such user";
                    }
                    else {
                        $location.url("/landing/" +user._id);
                    }
                })
                .error(function(bbb)
                {
                    console.log(bbb);
                });



        }
    }


})();
