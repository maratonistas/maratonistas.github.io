(function ($) {
  
  /* 
   * Todo implementar a busca dos membros do github dos maratonistas
   * API Github - https://api.github.com/
   **/

  function create_repository (object_data) {
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

  function RepositoriesController ($http) {
    this.list = [];
    var controller = this;

    function setList (list) {
      console.log(list);
      controller.list = list;
    }

    $http.get('https://api.github.com/orgs/maratonistas/repos').then(function (response) {
      if (response.status === 200) {
        var data = response.data;
        var repositories = [];
        data.forEach(function (item) {
          repositories.push(create_repository(item));
        });
        setList(repositories);
      } else {
        // não foi possível buscar repositórios
      }
    });
  }

  $.module('SPA', [])
    .controller('Repositories', RepositoriesController);

})(angular);