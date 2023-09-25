const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        removerSelecionado(botao)
        mudarPersonagem(indice)
    })
})

function removerSelecionado(botao){
    const botaoAtivo = document.querySelector('.selecionado');
    botaoAtivo.classList.remove('selecionado');
    botao.classList.add('selecionado');
}
function mudarPersonagem(indice){
    const personagemAtivo = document.querySelector('.selecionado');
    personagemAtivo.classList.remove('selecionado');
    personagens[indice].classList.add('selecionado');
}