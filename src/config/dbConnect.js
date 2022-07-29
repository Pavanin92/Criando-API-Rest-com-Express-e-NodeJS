import mongoose from "mongoose";
//inserir string de conexão com o banco criado
mongoose.connect("mongodb+srv://alura:123@alura.jc7v1bv.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;