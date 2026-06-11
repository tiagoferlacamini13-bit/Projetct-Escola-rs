function pegarDados() {
    let nome = document.querySelector("#nome").value
    let email = document.querySelector("#email").value
    let senha = document.querySelector("#senha").value
    localStorage.setItem('usuario', JSON.stringify({ nome, email, senha }))
}
function soltarDados() {
    const usuario = JSON.parse(localStorage.getItem('usuario'))

    if (usuario) {
        document.getElementById('nome').value = usuario.nome
        document.getElementById('email').value = usuario.email
        document.getElementById('senha').value = usuario.senhas
    }
}
