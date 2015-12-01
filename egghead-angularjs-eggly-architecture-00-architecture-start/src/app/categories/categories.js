angular.module('categories', ['eggly.models.bookmarks'])
.config(function($stateProvider){
  $stateProvider.state('eggly.categories', {
    url: '/',
    view: {
      'categories@':{
        controller: 'CategoriesCtrl',
        templateUrl: 'app/categories/categories.tmpl.html'},
      'bookmarks@':{
        controller: 'bookmarks',
        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'},
      }
    }
  })
  .controller('CategorieCtrl', function CategorieCtrl($scope)){

  })
  .controller('CategorieCtrl', function CategorieCtrl($scope)){
    
  })
)});
