console.log("Script.js está funcionando!");

document.querySelectorAll(".card-projetos").forEach((card) => {
  card.addEventListener("mouseover", function () {
    this.classList.add("preview");
  });
  card.addEventListener("mouseout", function () {
    this.classList.remove("preview");
  });
});

function showPreview(event, src) {
  const preview = document.getElementById("preview");
  const previewImg = document.getElementById("preview-img");

  previewImg.src = src;
  preview.style.display = "block";

  preview.style.top = event.pageY + 10 + "px";
  preview.style.left = event.pageX + 10 + "px";
}

function hidePreview() {
  document.getElementById("preview").style.display = "none";
}

/*---------*/

document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault(); // Impede o comportamento padrão do formulário (redirecionamento)

    const form = e.target;
    const formData = new FormData(form);
    const messageElement = document.getElementById("form-message");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        messageElement.style.display = "block"; // Exibe a mensagem de sucesso
        form.reset(); // Limpa o formulário

        // Remove a mensagem após 3 segundos
        setTimeout(() => {
          messageElement.style.display = "none";
        }, 3000);
      } else {
        alert("Houve um problema ao enviar sua mensagem. Tente novamente.");
      }
    } catch (error) {
      alert("Ocorreu um erro. Verifique sua conexão e tente novamente.");
    }
  });
