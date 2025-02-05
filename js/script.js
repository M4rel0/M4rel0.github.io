console.log("Script.js está funcionando!");
document.querySelectorAll(".card-projetos").forEach((card) => {
  // Quando o mouse entra no card
  card.addEventListener("mouseover", function (event) {
    if (window.innerWidth >= 400) {
      this.classList.add("preview");
      // Recupera o src da imagem a partir de um atributo customizado, por exemplo "data-src"
      const src = this.getAttribute("data-src");
      if (src) {
        showPreview(event, src);
      }
    }
  });

  card.addEventListener("mousemove", function (event) {
    if (window.innerWidth >= 400) {
      const src = this.getAttribute("data-src");
      if (src) {
        showPreview(event, src);
      }
    }
  });

  card.addEventListener("mouseout", function () {
    if (window.innerWidth >= 400) {
      this.classList.remove("preview");
      hidePreview();
    }
  });
});

function showPreview(event, src) {
  if (window.innerWidth < 400) return;

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
    e.preventDefault();

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
        messageElement.style.display = "block";
        form.reset();

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
