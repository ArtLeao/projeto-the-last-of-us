const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
botoesCarrossel.forEach((botao, indice) => { //o botao serve como um iterador aqui
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        ativarBotaoSelecionado(botao);

        desativarImagemAtiva();

        colocarImagemAtiva(indice);
    });
})

function colocarImagemAtiva(indice) {
    imagens[indice].classList.add('ativa');
}

function ativarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desativarImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
