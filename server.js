//acesso ao express. Express é um micro framework que vai nos ajudar a lidar com rotas (endreços da url que o usuário vai poder acessar na nossa api) e viws (as viws não vamos utilizar aqui mas que são as formas de visualização)
const express = require('express');

const cors = require('cors');//Aqui permitimos acesso de outros domínios externos.

//importar o mongoose
const mongoose = require('mongoose');

//instalamos via terminal  a biblioteca chamada npm install require-dir, que ela vai fazer esse papel de require em todos os arquivos aotomaticamente, para que a gente não precise ficar fazendo toda vez um require em cada um deles (do nosso models)
const requireDir = require('require-dir')

//o express nos retorna uma função e nós acabamos de execultar ela, ou seja, aqui iniciamos o App
const app = express();
app.use(express.json());//basicaemnte o que estou querendo aqui é permitir que eu envie dados para minha aplicação no formato de json

app.use(cors());//Aqui dentro de cors() podemos passar quais os domínios que queremos permitir acesso, algumas configurações a mais de segurança, mas por enquanto não vamos passar nenhuma informação  assim ele vai liberar acesso para todos os domínios.


//iniciando o banco de dados, precisamos passar a url de conexão com o mongodb
mongoose.connect('mongodb://localhost:27017/nodeapi',
{ useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models')//model registrado na nossa aplicação


//rotas
app.use('/api', require('./src/routes')); //Aqui o "use" vai receber todo tipo de requisição. Toda vez que a gente receber uma requisição a partir da rota api, vamos mandar ´para o nosso arquivo src/routes

app.listen(3001); //basicamente estou falando pra nossa aplicação ouvir a porta 3001 do nosso navegador

