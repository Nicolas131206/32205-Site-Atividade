function mostrarElenco() {
    const elenco = ["Courtois", "Carvajal", "Modric", "Vinícius Jr.", "Bellingham", "Rüdiger"];
    const listaElenco = document.getElementById("lista-elenco");
    
    listaElenco.innerHTML = "";
    
    elenco.forEach(jogador => {
        let li = document.createElement("li");
        li.textContent = jogador;
        listaElenco.appendChild(li);
    });
}
