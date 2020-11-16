const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

/*
//Primeira rota: toda vez que o usuário acessar a rota, e vamos passar a rota '/' raiz, e o segundo parâmetro do get é uma função com dois parâmetros req e res
routes.get('/products', (req, res) => { //o parâmetro "req" simboliza a requisição que estamos fazendo ao servidor, toda vez que a página ser atualizada, ou acessada pela url, estamos fazendo uma requisição ao servidor, e o req vai conter todas as informações de detalhes possíveis dessa requisição. E o que podemos pegar do req? Parâmetros, requisição, cabeçalho da requisição, usuário que está fazendo a requisição, autenticação, ip e muito mais.

Product.create({
  title: 'React Native',
  description: 'Build native apps with React',
  url: 'http://github.com/facebook/react-native'
});

//E o segundo parâmetro "res" tem haver com resposta que a gente vai dar para requisição, então basicamente o fluxo do back-end é fazendo uma requisição e obtendo uma resposta. Então aqui no res vão estar todas as informações para devolver uma resposta para o usuário;
return res.send('Hello, Worlds!');


});
*/

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);//para pegar um único produto
routes.post('/products', ProductController.store);//utilizamos o método post sempre que formos criar alguma no nosso servidor
routes.put('/products/:id', ProductController.update); //utilizamos o mpetodo put para atualização
routes.delete('/products/:id', ProductController.destroy);//remover

//vamos exportar
module.exports = routes;


