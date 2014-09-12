var app = angular.module('facebook_cleanup', []);

app.controller("mainpage", function ($scope) {
    $scope.posts = [];
    $scope.offset = 0;
    $scope.populate_posts = function (new_posts){
        console.log("New Posts");
        console.log(new_posts);
        for(var i = 0; i < new_posts.data.length; ++i){
            console.log("Running??");
            p_data = new_posts.data[i];
            console.log(p_data);
            if(p_data.message !== undefined && p_data.message.length > 0){
                $scope.posts.push(p_data);
            }
        }
    }
    $scope.post_populate_trigger = function(){
        console.log("Populated Called");
        var url = '/me/statuses?limit=100&offset=' + $scope.offset;
        console.log(url);
        FB.api(url, function(response) {
            console.log(response);
            $scope.offset += 100;
            $scope.$apply(function (){
                $scope.populate_posts(response);
            });
        });
    }
    $scope.delete_post = function(id){
        console.log(id);
        console.log("Deleting Post");
        window.open("http://facebook.com/" + id);
        /*
        FB.api(
                "/" + id,
                "DELETE",
                function (response) {
                    console.log(response);
                    if (response && !response.error) {
                        handle the result 
                    }
                }
              );
              */
    }
    $scope.logged_in = function(response){
        $scope.logged_in = "Welcome, " + response.name;

    }

});
