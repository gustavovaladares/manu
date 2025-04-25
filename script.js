const coracoes = document.querySelectorAll(".coracao");
const mensagens = document.querySelectorAll("#mensagens p");
const botao = document.querySelector("#surpresa");

let contadorMensagem = 0;

coracoes.forEach(coracao => {
  coracao.addEventListener("click", () => {
    if (contadorMensagem < mensagens.length) {
      const msg = mensagens[contadorMensagem];
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.opacity = 1;
      }, 10);
      contadorMensagem++;
    }
  });
});

botao.addEventListener("click", () => {
  if (contadorMensagem >= mensagens.length) {
    window.location.href = "surpresa.html"; // Redireciona para a página de surpresa
  } else {
    alert("Leia todas as mensagens primeiro com os corações!");
  }
});
