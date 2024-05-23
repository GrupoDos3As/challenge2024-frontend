// função - mostrar menu

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

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const formData = new FormData(form);
    const dadosCarro = Object.fromEntries(formData);

    console.log(dadosCarro);

    window.location = "../../index.html"
})