// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto!';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Digite um Número entre 1 e 10!';

let numSecreto = numAleatorio();
console.log(numSecreto);

function criaTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

criaTexto('h1', 'Jogo do Número Secreto!');
criaTexto('p', 'Digite um Número entre 1 e 10!');

//verifica o chute do jogador e valida se é =
function verificarChute(){
    let chute = document.querySelector('input').value
    console.log(chute == numSecreto);

    if(chute == numSecreto){
        alert('Parabéns!')
    }else{
        alert('Você errou!')
    }
}
//gera um n° aleatorio
function numAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}