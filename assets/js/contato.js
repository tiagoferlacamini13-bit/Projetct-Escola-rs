// ===== SISTEMA DE CONTATO E VALIDAÇÃO DE FORMULÁRIO =====

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Mostrar dados salvos na página de confirmação
    if (document.getElementById('nome')) {
        carregarDadosConfirmacao();
    }
});

// ===== TRATAR ENVIO DO FORMULÁRIO =====
function handleFormSubmit(e) {
    e.preventDefault();

    // Coletar dados do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
        alert('⚠️ Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação de e-mail
    if (!validarEmail(email)) {
        alert('⚠️ Por favor, insira um e-mail válido.');
        return;
    }

    // Salvar dados no localStorage
    const dadosContato = {
        nome: nome,
        email: email,
        telefone: telefone,
        assunto: assunto,
        mensagem: mensagem,
        data: new Date().toLocaleString('pt-BR')
    };

    try {
        localStorage.setItem('ultimoContato', JSON.stringify(dadosContato));
        console.log('✓ Dados salvos com sucesso');
        
        // Redirecionar para página de confirmação
        setTimeout(() => {
            window.location.href = 'Comfirmation/comfirmation.html';
        }, 500);
    } catch (erro) {
        console.error('Erro ao salvar dados:', erro);
        alert('Houve um erro ao processar sua mensagem. Tente novamente.');
    }
}

// ===== VALIDAR E-MAIL =====
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// ===== CARREGAR DADOS NA PÁGINA DE CONFIRMAÇÃO =====
function carregarDadosConfirmacao() {
    try {
        const dados = JSON.parse(localStorage.getItem('ultimoContato'));

        if (dados) {
            document.getElementById('nome').innerText = dados.nome || '-';
            document.getElementById('email').innerText = dados.email || '-';
            document.getElementById('assunto').innerText = dados.assunto || '-';
            
            console.log('✓ Dados carregados na página de confirmação');
        } else {
            console.warn('⚠️ Nenhum dado de contato encontrado');
        }
    } catch (erro) {
        console.error('Erro ao carregar dados:', erro);
    }
}

// ===== LOG PARA DEBUG =====
console.log('✓ Sistema de contato carregado com sucesso');
