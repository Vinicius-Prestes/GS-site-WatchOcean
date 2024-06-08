
// criação do menu hamburguer com js
function menuhamburguer() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('active');
    var botaoHamburguer = document.querySelector('.botao-hamburguer');
    botaoHamburguer.classList.toggle('open');
}


//criação do carrossel
let imagemIndex = 0;
mostraimagem(imagemIndex);

function mostraimagem(n) {
    let imagem = document.getElementsByClassName("imagem-carrossel");
    if (n >= imagem.length) { imagemIndex = 0 }
    if (n < 0) { imagemIndex = imagem.length - 1 }
    for (let i = 0; i < imagem.length; i++) {
        imagem[i].style.display = "none";
    }
    imagem[imagemIndex].style.display = "block";
}

// função para mudar as imagens do carrossel
function proxima() {
    mostraimagem(++imagemIndex);
}

function anterior() {
    mostraimagem(--imagemIndex);
}

//validação email

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Verificação básica de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    alert('Email cadastrado: ' + email);
  });
    
