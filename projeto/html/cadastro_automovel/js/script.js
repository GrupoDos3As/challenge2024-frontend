function mostrarMenu() {
    let menuCelular = document.querySelector(".menu-celular")
    if (menuCelular.classList.contains("open")) {
        menuCelular.classList.remove("open")
        document.querySelector("#icone").src = "../../img/menu_white_36dp.svg"
    } else {
        menuCelular.classList.add("open")
        document.querySelector("#icone").src = "../../img/close_white_36dp.svg"
    }
}

const form = document.querySelector("form")

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const placa = document.querySelector("#placaId").value
    const cnh = document.querySelector("#cnhId").value
    const vencimentoCnh = document.querySelector("#vencimentoCnhId").value
    const modelo = document.querySelector("#modeloId").value
    const anoCarro = document.querySelector("#anoDoAutomovelId").value

    let dadosCarro = [placa, cnh, vencimentoCnh, modelo, anoCarro]

    console.log(dadosCarro);
})