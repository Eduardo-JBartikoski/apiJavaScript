async function buscarMensagem() {
    const resposta = await fetch('api/mensagem');
    const dados = await resposta.json();
    document.getElementById('resultado').textContent = dados.mensagem;
}