document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnBuscar');

    botao.addEventListener('click', async () => {
        try {
            const resposta = await fetch('/api/mensagem');
            const dados = await resposta.json();
            console.log(dados.mensagem);

            // Mostrar no HTML também
            document.getElementById('resultado').textContent = dados.mensagem;
        } catch (erro) {
            console.error('Erro ao buscar mensagem:', erro);
            document.getElementById('resultado').textContent = 'Erro na requisição';
        }
    });
});