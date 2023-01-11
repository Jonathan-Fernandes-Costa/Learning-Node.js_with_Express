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
app.get('/livros/:id', (req, res) =>{
    let {id} = req.params;
    let index = Buscalivro(id)
    res.status(200).json(livros[index])
})
//Adicionar Dados

//Atualizar dados
app.put('/livros/:id', (req, res) =>{
    let {id} = req.params;
    let index = Buscalivro(id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})
//Apagando dados
app.delete('/livros/:id', (req, res) =>{
    let {id} = req.params;
    let index = Buscalivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} apagado`)
})
function Buscalivro(id){
    return livros.findIndex(livro => livro.id == id)
}
export default app