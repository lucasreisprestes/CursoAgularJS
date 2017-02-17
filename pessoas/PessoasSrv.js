/*Model*/
console.log('PessoasCtrl.js - MODEL/SERVICE');
pessoas
  .factory('PessoasSrv', function($resource){ // $resource = , 'ngResource']);
      return $resource(//é uma extensão, modulo, do angluar, para fazer conexões Rest
        '/index.php/pessoas/'
      );
  })
