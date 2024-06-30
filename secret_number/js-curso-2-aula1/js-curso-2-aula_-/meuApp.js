let listaNumSorteados;

//gerando um numero aletario
let numSecreto = numAleatorio();
console.log(numSecreto);
let tentavivas = 1;

//função para criar um texto em uma tag
function criaTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.1})
}

function mensagemInicial(){
    criaTexto('h1', 'Jogo do numero Secreto');
    criaTexto('p', 'Faça seu chute e acerte o número Secreto!');
}
mensagemInicial();

//função para conferir o chute do usuario
function verificarChute(){
    //pega o valor do input e verifica se é igual ao numero gerado
    let chute = document.querySelector('input').value;

    if(chute == numSecreto){
        criaTexto('p', 'Parabéns, você acertou em cheio!');
        let palavraTentativa = tentavivas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou em ${tentavivas} ${palavraTentativa}!`;
        criaTexto('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numSecreto){
            criaTexto('p', 'O chute é maior que o numero pensado!')
        }else{
            criaTexto('p', 'O chute é menor que o numero pensado!')
        }
        tentavivas++;
        limpaTexto();
    }
}

function numAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function limpaTexto(){
    chute = document.querySelector('input');
    chute.value = '';
}

function newGame(){
    numSecreto = numAleatorio();
    limpaTexto();
    tentavivas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}