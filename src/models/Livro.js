import mongoose from "mongoose";
//modelo que vai representar os livros
const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    Titulo: {type: String, required: true},
    Autor: {type: mongoose.SchemaTypes.ObjectId, ref: 'autores', required: true},
    Editora: {type: String, required: true},
    numeroPaginas: {type: Number}
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;