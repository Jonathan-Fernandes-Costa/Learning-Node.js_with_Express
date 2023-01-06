const http = require("http")
const porta = 3000;
const rotas = {
    '/' : "Curso node",
    '/livros' : "Pagina Livros",
    '/autor': "Pagina Autor",
    '/teste': "Teste nodemon"
}
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})

server.listen(porta, () => console.log(`Servidor rodando em http://localhost:${porta}`))//Dizer qual porta o servidor vai escutar