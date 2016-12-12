/**
 * Created by mohsennabian on 11/26/16.
 */

(function(){
    angular
        .module("ResearchApp")
        .controller("RegisterController", RegisterController);


        function RegisterController($location,UserService) {

            var vm = this;
            vm.register = register;


            function register(username, password){



                var promise =UserService.createUser({ username : username, password : password, firstName:"norecord",lastName:"norecord"});
                promise
                    .success(function(user)
                    {
                        console.log(user._id);
                        $location.url("/landing/" +user._id);

                    })
                    .error(function(bbb)
                    {
                        console.log(bbb);
                    });


            }
        }
    })();

