const campoBusca = document.getElementById("campoBusca");
const artigos = document.querySelectorAll(".artigo");

// Abrir e fechar artigo ao clicar no título
document.querySelectorAll(".titulo").forEach(titulo => {
    titulo.addEventListener("click", () => {
        const descricao = titulo.nextElementSibling;
        descricao.style.display =
            descricao.style.display === "block" ? "none" : "block";
    });
});

// Filtro em tempo real
campoBusca.addEventListener("input", () => {
    const filtro = campoBusca.value.toLowerCase();

    artigos.forEach(artigo => {
        const textoCompleto = artigo.textContent.toLowerCase();

        if (textoCompleto.includes(filtro)) {
            artigo.style.display = "block";
        } else {
            artigo.style.display = "none";
        }
    });
});
