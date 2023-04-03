const tempo = document.getElementById('tempo')
const Recife = document.getElementById('PB')
const Salvador = document.getElementById('BA')
const SaoPaulo = document.getElementById('SP')
const RiodeJaneiro = document.getElementById('RJ')


Recife.addEventListener('click',ensolarado)

function ensolarado(){
    tempo.src ="imagens/sol.png"
    
}

Salvador.addEventListener('click',chuva)

function chuva(){
    tempo.src = "imagens/chuva.png"
   
}

SaoPaulo.addEventListener('click',nubla)

function nubla(){
    tempo.src = "imagens/nublado.png"

}

RiodeJaneiro.addEventListener('click',pcnubla)

function pcnubla(){
    tempo.src = "imagens/pcnubla.png"

}
