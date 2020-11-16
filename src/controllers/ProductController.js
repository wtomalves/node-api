//este arquivo ProductController vai lidar basicamente com as operações que podemos ter em determinado model. Por exemplo, listagem, criação, atualização, remoção, entre outros. Então, vamos importar o mongoose, porque vamos precisar lidar com banco de dados , vamos importar o nosso módel de Product

const mongoose = require('mongoose');

const Product = mongoose.model('Product');

//vamos exportar o objeto com albgumas funções
module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;//Aqui vamos conseguir acessar os dados da página informados (parte de paginação). O query é utilizados para parâmetros get. Vamos deixar um parâmetro dafault para page colocando o valor 1.
    const products = await Product.paginate({}, { page, limit: 10 });//limite por página 10 de informação dos dados

    return res.json(products);
  },

  //rota de detalhe
  async show(req, res) {
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  //definir novo método
  async store(req, res) {
    //código de criação
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });//A  ui vamos encontrar um id que vem lá dos parâmetros e vou atualizar eles com o conteúdo que vem do nosso raq.body. Neste caso aqui estamos unindo a funcionalidade do show com a funcionalidade do store, porque estamos precisando buscar um único produto e atualizar as propriedades que vem lá do nosso body. E ainda passamos mais um parâmetro { new: true }, basicamente aqui eu to dizendo que eu quero o mongoose retorne esse produto atualizado para dentro da variável product, se eu não passe o new true, ele vai retornar para a variável product o produto antes de atualizar as informações do req.body

    return res.json(product);
  },

  async destroy(req, res) {//remoção
    await Product.findByIdAndRemove(req.params.id);

    return res.send(); //Aqui retorna uma resposta de sucesso sem nenhum conteúdo
  },
};



