var app = angular.module('facebook_cleanup', []);

app.controller("mainpage", function ($scope) {
    $scope.posts = [];
    $scope.populate_posts = function (new_posts){
        console.log("New Posts");
        console.log(new_posts);
        for(var i = 0; i < new_posts.data.length; ++i){
            console.log("Running??");
            p_data = new_posts.data[i];
            console.log(p_data);
            $scope.posts.push({
                message :       p_data.message,
                updated_time :  p_data.updated_time
            });
        }
    }
    $scope.post_populate_trigger = function(){
        console.log("Populated Called");
        FB.api('/me/statuses', function(response) {
            console.log(response);
            $scope.$apply(function (){$scope.populate_posts(response);});
        });
    }

});
