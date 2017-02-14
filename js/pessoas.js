/*pessoas.js*/

 angular
    //Como estamos importando o arquivo angular-route.min.js, então precisaremos também importar o módulo ngRoute
    .module('mdPessoas',['ngRoute'])

    .config(function($routeProvider){  //Config corresponde a configuração de rotas do angular que utiliza $routeProvider
      //when => quando o usuário usar a rota...
      $routeProvider.when('/',
          {
              // passamos o objeto
              templateUrl: 'listar.html'
          });
          
        console.log('Feitooooooooooo');
    })

    .controller('CtrlPessoas', function($scope){

        $scope.pessoas = [
            {nome: "Maria",  cidade:"São Paulo"},
            {nome: "Pedro",  cidade:"Porto Alegre"},
            {nome: "João" ,  cidade:"Parnaiba"},
            {nome: "Cleber", cidade:"Paraná"}
        ];


  });
