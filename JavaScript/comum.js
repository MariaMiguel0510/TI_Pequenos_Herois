/*--------------hamburguer cabeçalho telemovel--------------*/ 
var botao = document.querySelector(".burguerBotao");
botao.addEventListener('click', firstClick);

function firstClick(){
  var nav = document.querySelector("nav");
  nav.classList.toggle("show");/*a função toggle faz com que haja esta interação de aparecer desaparecer, está ligada à classe show do ficheiro css*/
}

/*------------botão que volta ao inicio da página-----------*/ 
var btn = document.querySelector("#inicio");
btn.addEventListener("click", regressaInicio);

function aparece() {
  if (window.scrollY > 250) {
    animateImage();
  } else {
    btn.style.opacity = '0';
  }
}

function regressaInicio(){
  window.scrollTo(0,0);
}

function animateImage() {
  btn.style.transitionProperty = 'opacity, transform';
  btn.style.transitionDuration = '1.3s, 1.3s';
  btn.style.opacity = '1';
}

window.addEventListener("scroll", aparece);








