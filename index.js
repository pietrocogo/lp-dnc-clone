const leonardo = document.getElementById("Leonardo");
const samantha = document.getElementById("Samantha");
const bruna = document.getElementById("Bruna");
const setaDireita = document.getElementById("seta-direita");
const setaEsquerda = document.getElementById("seta-esquerda");
const secaoCards = document.getElementById("secao-cards");

function RolarDir(){
    leonardo.style = "display:none";
    bruna.style = "display:flex";
    setaDireita.style = "display:none;";
    setaEsquerda.style = "display:flex";
}
    

function RolarEsq(){
    leonardo.style = "display:flex";
    bruna.style = "display:none";
    setaDireita.style = "display:flex;";
    setaEsquerda.style = "display:none";
}