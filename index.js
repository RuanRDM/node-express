const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

const ola = (request, response) => {
    response.status(200).json({"message": "Bem vindo ao Express"});
}

const pegaDados = (request, response) => {
    const {nome, profissao} = request.body;
    response.status(200).json({nomerecebido: nome, 
                               profissaorecebida: profissao, 
                               message: "Dados recebidos"});
}

app.route("/ola")
   .get(ola)
   .post(pegaDados);

app.listen(3002, () => {
    console.log("Servidor rodando na porta 3002");
})