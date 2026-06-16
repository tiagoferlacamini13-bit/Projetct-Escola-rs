// ===== FUNCIONALIDADES DO SITE PROJETO ESCOLA =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('✓ Projeto Escola - Site carregado com sucesso!');
    
    // Adicionar animações de scroll
    observarElementos();
    
    // Melhorar acessibilidade
    melhorarAcessibilidade();
});

// ===== OBSERVER PARA ANIMAÇÕES DE SCROLL =====
function observarElementos() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    // Observar todas as seções
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0.8';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}

// ===== MELHORIAS DE ACESSIBILIDADE =====
function melhorarAcessibilidade() {
    // Adicionar suporte a navegação por teclado
    document.addEventListener('keydown', function(event) {
        // Tab para navegação
        if (event.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    // Remover indicador visual de teclado ao usar mouse
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });

    // Focar no primeiro link da navegação
    const primeiroLink = document.querySelector('nav a');
    if (primeiroLink) {
        primeiroLink.addEventListener('focus', function() {
            console.log('✓ Navegação por teclado ativada');
        });
    }
}

// ===== SMOOTH SCROLL PARA LINKS ÂNCORA =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== DETECÇÃO DE NAVEGADOR PARA COMPATIBILIDADE =====
console.log('Navegador: ' + navigator.userAgent.split(' ').pop());
console.log('JavaScript habilitado ✓');
