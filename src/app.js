import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
//criando a conexão
db.on("error", console.log.bind(console, 'Erro de conexão'))
//abrir a conexão com o banco
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso')
})
//criar uma instância do express para subir um servidor e ver as rotas acontecendo
const app = express();
app.use(express.json())
//ativar o direcionamento das rotas
routes(app);
//programando o GET para definir os atributos, o que eu quero que aconteça quando eu fizer uma requisição para uma determinada rota
//método de atualização
//método de deletar
//exportar o arquivo para utilizar no server, onde será disparado o listen
export default app