// Mensagem de boas-vindas
window.onload = function () {
    alert("🌱 Bem-vindo ao Projeto Agrinho - Agricultura: Agro Forte!");

    mostrarData();
};

// Contador de produção agrícola
let producao = 0;

function aumentarProducao() {
    const contador = document.getElementById("contador");

    if (contador) {
        producao += 100;
        contador.innerHTML =
            "Produção Agrícola: " + producao + " toneladas";
    }
}

// Mostrar data atual
function mostrarData() {
    const data = document.getElementById("data");

    if (data) {
        const hoje = new Date();

        data.innerHTML =
            "Data atual: " + hoje.toLocaleDateString("pt-BR");
    }
}
