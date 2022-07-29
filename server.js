//funcionalidade definida para iniciar o servidor e ficar escutando a requisição
import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => { //onde o servidor vai escutar a requisição
  console.log(`Servidor escutando em http://localhost:${port}`)
})