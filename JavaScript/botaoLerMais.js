//interação de carregar no botão para ler mais e menos texto---
var firstButton = document.querySelector("#btnOne");//variável para o botão
firstButton.addEventListener('click', clickOne);// ao clicar executa a função clickOne
var texto = document.querySelector(".textoEscondido");// variável para o pedaço de texto que se revela


function clickOne(){
  firstButton.innerText = "Ler mais";

    if (texto.style.display == "block") {
      texto.style.display = "none";
    } else {
      texto.style.display = "block";
      firstButton.innerText = "Ler menos";
    }
}