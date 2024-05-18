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