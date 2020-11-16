//A ui basicamente precisamos falar quais schemas, ou seja, quais são os campos que o produto pode ter, e que tipos de valores esses campos vão salvar, então vamos começar importando o magoose
const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

//neste objeto eu vou passar quais os são os compos que eu quero salvar no meu banco de dados para cada produto
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createAt: { //vai guardar a data de crialçao de cada produto
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);


