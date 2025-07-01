const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // uso html
app.use(express.json()); // leitura JSON requisição
app.use(express.static('public'));


//get
app.get('/api/mensagem', (req, res) => {
    res.json({mensagem: 'Olá do servidor' });
});

//iniciando servidor
app.listen(3000, ()=> {
    console.log('Servidor rodando em http://localhost:3000');
} )