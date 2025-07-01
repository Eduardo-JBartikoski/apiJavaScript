document.getElementById('resultado').addEventListener('click',async() => {
    try {
        const resposta = await fetch('api/mensagem');
        const dados = await resposta.json();
        console.log(dados.mensagem);
    } catch (erro) {
        console.error('Erro ao buscar mensgem:  ', erro);
    }
})





    