document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const temaSelect = document.getElementById("temaSelect");
  const precoInput = document.getElementById("precoInput");
  const filtrarBtn = document.getElementById("filtrarBtn");
  const cards = document.querySelectorAll(".card");

  function aplicarFiltros() {
    const textoBusca = searchInput.value.toLowerCase();
    const temaSelecionado = temaSelect.value;
    const precoMaximo = parseFloat(precoInput.value);

    cards.forEach(card => {
      const tema = card.getAttribute("data-tema");
      const preco = parseFloat(card.getAttribute("data-preco"));
      const titulo = card.querySelector("h3").textContent.toLowerCase();

      const condicoes = [
        !textoBusca || titulo.includes(textoBusca),
        !temaSelecionado || tema === temaSelecionado,
        !precoMaximo || preco <= precoMaximo
      ];

      const mostrar = condicoes.every(Boolean);
      card.style.display = mostrar ? "block" : "none";
    });
  }

  filtrarBtn.addEventListener("click", aplicarFiltros);
  searchInput.addEventListener("input", aplicarFiltros);
});
