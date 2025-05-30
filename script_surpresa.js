let imagens = document.querySelectorAll('.imagem-carrossel');
let btnAnterior = document.getElementById('anterior');
let btnProximo = document.getElementById('proximo');

let indiceAtual = 0;

function mostrarImagem() {
  imagens.forEach((img, index) => {
    img.style.display = 'none';
    img.style.opacity = 0;
  });

  if (imagens[indiceAtual]) {
    imagens[indiceAtual].style.display = 'block';
    setTimeout(() => {
      imagens[indiceAtual].style.opacity = 1;
    }, 10);
  }
}

btnProximo.addEventListener('click', () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem();
});

btnAnterior.addEventListener('click', () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem();
});


mostrarImagem();


const audio = document.querySelector('audio');
audio.volume = 0.1; 
