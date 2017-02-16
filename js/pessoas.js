/*pessoas.js*/
 angular
    //Como estamos importando o arquivo angular-route.min.js, então precisaremos também importar o módulo ngRoute
    .module('mdPessoas',['ngRoute'])

    .config(['$routeProvider',function ($routeProvider){  //Config corresponde a configuração de rotas do angular que utiliza $routeProvider

      //$locationProvider.hashPrefix("!");

      //when => quando o usuário usar a rota...
      $routeProvider
          .when('/',
          {              // passamos o objeto
              templateUrl: 'listar.html'
          })
          .when('/pessoa/adicionar',
          {
              templateUrl:'adicionar.html',
              controller: 'CtrlAdicionar' // preciso definir qual o controle irá utilizar
          })
          // :index -> quem é a pessoa do array
          .when('/pessoa/:index',
          {
              templateUrl:'editar.html',
              controller:'Ctrleditar'
          })

    }])

    .controller('CtrlPessoas', function($scope){

        $scope.pessoas = [
            {nome: "Maria",  cidade:"São Paulo"},
            {nome: "Pedro",  cidade:"Porto Alegre"},
            {nome: "João" ,  cidade:"Parnaiba"},
            {nome: "Cleber", cidade:"Paraná"}
        ];

        console.log("Show");
        $scope.remover = function (index){
          $scope.pessoas.splice(index, 1);
        }

   })

   .controller('Ctrleditar', function($scope,$routeParams){
     //obj do formulário    // indice do array
      $scope.pessoa     =   $scope.pessoas[$routeParams.index];

   })

   .controller('CtrlAdicionar', function($scope){

      $scope.add = function (){
          // forma 1 de fazer a inclusão no array
          /*$scope.pessoas.push({
              nome: $scope.pessoa.nome,
              cidade: $scope.pessoa.cidade
          })*/

          // forma 2 de fazer a inclusão no array, pois o objeto está vindo certo do formulario
          $scope.pessoas.push($scope.pessoa);

          $scope.pessoa = '';
          //$scope.pessoa.cidade = '';
          $scope.result= "Registro adicionado com sucesso!!!"
      };

   });
