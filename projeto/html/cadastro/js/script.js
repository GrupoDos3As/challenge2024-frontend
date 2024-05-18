const form = document.querySelector('#form')

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.querySelector("#nomeCompletoId").value;
    const email = document.querySelector("#emailId").value;
    const senha = document.querySelector("#senhaId").value;
    const cpf = document.querySelector("#cpfId").value;
    let endereco = document.querySelector("#enderecoId").value;
    let complemento = document.querySelector("#complementoId").value;
    const dataNascimento = document.querySelector("#dataNascimentoId").value;
    let celular = document.querySelector("#celularId").value

    let dados = [nome, email, senha, cpf, endereco, complemento, dataNascimento, celular]
    
    console.log(dados);
})