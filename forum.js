var news = angular.module('News', []);
news.controller("MainCtrl", function($scope) {

  $scope.forumName = "Forum";

  $scope.posts = [
    {title:'Welcome to the Forum!', content:"Please post responsibly.", upvotes:0}
  ];

  $scope.addPost = function() {
    $scope.posts.push({title:$scope.titleForm, content:$scope.contentForm, upvotes:0});
    $scope.titleForm = "";
    $scope.contentForm = "";
  };

  $scope.upvoted = function(post) {
    post.upvotes += 1;
  };

});
