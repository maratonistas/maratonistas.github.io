(function ($) {
 
  $.module('SPA', ['Repository'])
    .controller('Repositories', ['$scope','RepositoryServiceList', 'RepositoryServiceFilterList', 
      function ($scope, RepositoryServiceList, RepositoryServiceFilterList) {
        var controller = this;

        this.list = [];
        this.listFiltered = [];
        this.filter = "";

        this.updateFilter = function (filter) {
          this.filter = filter;
        }

        $scope.$watch('filter', function (filter) {
          controller.filter = filter ? filter : '';
          controller.listFiltered = RepositoryServiceFilterList.execute(controller.list, controller.filter);
        });

        RepositoryServiceList.execute(function(repositories){
          controller.list = repositories;
          controller.listFiltered = controller.list;
        });

      }
    ]
  );

})(angular);