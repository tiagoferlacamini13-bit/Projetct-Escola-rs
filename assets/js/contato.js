function pegarDados() {

    let nome = document.querySelector("#nome").value
    let email = document.querySelector("#email").value
    let senha = document.querySelector("#senha").value
    localStorage.setItem('usuario', JSON.stringify({ nome, email, senha }))


    if (nome != "" && email != "" && senha != "") {
        alert("Preencha seus dados")
    }
    else {
        window.location.href = '/assets/pages/Comfirmation/comfirmation.html';
    }
}
function soltarDados() {
    const usuario = JSON.parse(localStorage.getItem('usuario'))

    if (usuario) {
        document.getElementById('nome').innerText = usuario.nome
        document.getElementById('email').innerText = usuario.email
        document.getElementById('senha').innerText = usuario.senha

    }
}
  
