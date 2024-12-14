//--------------------------carrosel de imagens----------------
var slidesContainer = document.querySelector(".scroll");//variável que envolve todo o carrossel
var slide = document.querySelector(".card");//variável para cada imagem
var firstImg = slide.querySelectorAll("img")[0];//variável para a primeira imagem

//variáveis para cada seta.
var prevButton = document.querySelector("#botoes_Scroll_Esq");
var nextButton = document.querySelector("#botoes_Scroll_Drt");
var slideWidth = firstImg.clientWidth + 70;//variável que vai buscar a largura de cada imagem.

nextButton.addEventListener("click", avancaBotao);
function avancaBotao() { 
  slidesContainer.scrollLeft = slidesContainer.scrollLeft + slideWidth;//estipula que o "tamanho" do scroll é igual ao tamanho de +1 card

  if (slidesContainer.scrollLeft === (slidesContainer.scrollWidth - slidesContainer.clientWidth) - slideWidth) { //se o scrollLeft atingir o valor máximo de largura do carrossel
      nextButton.style.display = "none";//então o botão da direita não é desenhado
    } else {
      nextButton.style.display = "block";
    }
    prevButton.style.display = "block";
}

prevButton.addEventListener("click", recuaBotao);
function recuaBotao() {
  slidesContainer.scrollLeft = slidesContainer.scrollLeft - slideWidth;

   if (slidesContainer.scrollLeft === 0 + slideWidth) {
      prevButton.style.display = "none";//então o botão da esquerda não é desenhado
    } else {
      prevButton.style.display = "block";
    }
    nextButton.style.display = "block";
}

/*---------------criar o nome para cada membro---------------*/

//a função getName() recebe o valor de json e o número do card que correspondente a cada um dos cards no html
function getName(cardNumber) {
  fetch("https://randomuser.me/api/")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);

      document.body.appendChild(makeUser(json, cardNumber));
    });
}

function makeUser(json, cardNumber) {
  var pessoa = json.results[0];

  var nomePessoa = document.createElement("p");//crio um parágrafo para cada nome
    nomePessoa.classList.add("nomeMembro");//adiciono-o a uma classe que nomeei como nomeMembro que está estilizada no css para ficar no canto inferior direito de cada imagem
    nomePessoa.innerText = pessoa.name.first + " " + pessoa.name.last;

  var card = document.querySelector(".card.card" + cardNumber);
  card.appendChild(nomePessoa);//seleciona a classe card e a class card com número (a específica card que corresponde ao card selecionado) e adiciona o nomePessoa (que é o nome do membro) ao card como "filho"

  var infoPessoa = document.createElement("p");
  infoPessoa.classList.add("infoMembro");
  infoPessoa.innerText = pessoa.dob.age + ", " + pessoa.location.country;
  card.appendChild(infoPessoa);
}

for (var i = 0; i <= 9; i++) {//array que cria 9 nomes aleatórios
  getName(i);
}
