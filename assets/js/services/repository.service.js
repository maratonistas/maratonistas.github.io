(function ($) {

  $.module("Repository", [])
    .factory('RepositoryServiceCreate', function() {
      return {
        execute: function (object_data) {
          return ({
            id: object_data.id,
            name: object_data.name,
            full_name: object_data.full_name,
            html_url: object_data.html_url,
            owner: {
              url: object_data.owner.url,
              avatar_url: object_data.owner.avatar_url,
              description: object_data.owner.description
            }
          });
        }
      }
    })
    .factory('RepositoryServiceList', ["$http","RepositoryServiceCreate", function ($http, RepositoryServiceCreate) {
      return {
        execute: function (successCallback, errorCallback) {
          $http.get('https://api.github.com/orgs/maratonistas/repos').then(function (response) {
            if (response.status === 200) {
              var data = response.data;
              var repositories = [];
              data.forEach(function (item) {
                repositories.push(RepositoryServiceCreate.execute(item));
              });
              
              successCallback(repositories);         
            } else {
              // não foi possível buscar repositórios
              if (errorCallback) {
                errorCallback();
              }
            }
          });
        }
      }
    }])
    .factory("RepositoryServiceFilterList", function () {
      return {
        execute: function (repositoryList, filter) {
          if (filter.trim().length === 0) {
            return repositoryList;
          }

          return repositoryList.filter(function(repository) {
            return repository.name.indexOf(filter) !== -1;
          });
        }
      }
    });
})(angular);
