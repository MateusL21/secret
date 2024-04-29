function run() {
    document.getElementById("but").innerHTML += `
        <div class="col">
            <img src="momo.jpg.jpg" width="400" height="500" class="shadow rounded">
        </div>
    `;
    document.getElementById("text").innerHTML = "Este é somente um lembrete de todo meu carinho por você meu amor<p>(te achei fofa na foto) <p> <p> by seu amor: Mateus ❤";

    document.getElementById("animation").innerHTML = `
        <div class="row justify-content-center">
            <div class="heart"></div>
            <div class="heart"></div>
            <div class="heart"></div>
        </div>
    `;

    // Desabilita o botão após o clique
    document.getElementById("click").disabled = true;
}
