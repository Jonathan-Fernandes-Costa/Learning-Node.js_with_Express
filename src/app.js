//Usando express para criar o servidor
import express from "express";
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"
import routes from "./routes/index.js"
db.on("error", console.log.bind(console, 'Erro de conexão com o banco de dados'))//interligando banco de dados
db.once("open", ()=>{console.log("Conexão com o banco de dados estabelecida")
})
const app = express()
app.use(express.json())
//CRUD
//Acessar dado
routes(app)
export default app