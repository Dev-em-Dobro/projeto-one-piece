const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        removerSelecionado()
        adicionarSelecionado(indice)
    })
})

function removerSelecionado(){
    const botaoAtivo = document.querySelector('.botao.selecionado');
    botaoAtivo.classList.remove('selecionado');
    
    const personagemAtivo = document.querySelector('.personagem.selecionado');
    personagemAtivo.classList.remove('selecionado');
}
function adicionarSelecionado(indice){
    personagens[indice].classList.add('selecionado');
    botoes[indice].classList.add('selecionado');
}