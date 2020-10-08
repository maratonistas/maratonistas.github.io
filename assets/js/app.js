(function ($) {
  
  /* 
   * Todo implementar a busca dos membros do github dos maratonistas
   * API Github - https://api.github.com/
   **/

  function create_member (name, username, cover, link) {
    return ({
      name: name, 
      username: username, 
      link: link,
      cover: cover
    });
  }

  function MembersController () {
    this.list = [
      create_member('Gabriel Mendonça', 'brunoom1', 'https://avatars1.githubusercontent.com/u/863357?s=460&u=6677f2c12db7bb0db6d51f3ce097f310f5a5a9bb&v=4', 
        'https://github.com/brunoom1'),
      create_member('Gabriel Mendonça', 'brunoom1', 'https://avatars1.githubusercontent.com/u/863357?s=460&u=6677f2c12db7bb0db6d51f3ce097f310f5a5a9bb&v=4', 
        'https://github.com/brunoom1'),
    ];
  }

  $.module('SPA', [])
    .controller('Members', MembersController);

})(angular);