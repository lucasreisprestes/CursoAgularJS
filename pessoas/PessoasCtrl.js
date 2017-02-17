console.log('PessoasCtrl.js - CONTROLLER');
pessoas
      .controller('PessoasCtrl',
            ['$scope','PessoasSrv', // dependências
                   function($scope, PessoasSrv){
                        $scope.load = function(){//metodo
                             $scope.registros = PessoasSrv.query(); //chamando SERVICE para pegar os registros
                        }
                  }
            ]
    );
