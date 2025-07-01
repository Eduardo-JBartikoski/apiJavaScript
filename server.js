const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors()); // uso html
app.use(express.json()); // leitura JSON requisição
app.use(express.static(path.join(__dirname, 'public')));


//get
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

//iniciando servidor
app.listen(3000, ()=> {
    console.log('Servidor rodando em http://localhost:3000');
} )