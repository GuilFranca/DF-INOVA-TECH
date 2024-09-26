// Alternar tema claro/escuro

// Declara a variável themeToggle, na qual é do tipo const, sendo esse o tipo que não é possível alterar o valor dentro da mesma. associando à variável através do DOM a id = 'themeToggle'
const themeToggle = document.getElementById('themeToggle');
// Declara a variável scrollToTopBtn, na qual é do tipo const, sendo esse o tipo que não é possível alterar o valor dentro da mesma. associando à variável através do DOM a id = 'scrollToTop'
const scrollToTopBtn = document.getElementById('scrollToTop');
// Declara a variável body, na qual é do tipo const, sendo esse o tipo que não é possível alterar o valor dentro da mesma. associando à variável através do DOM ao body do index.html'
const body = document.body;

// Caso a variável sofra o evento de click o receberá o uma class com o nome 'dark', fazendo assim com que troque as cores do site para o modo escuro
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
});

// Validação de e-mail

// Declara a variável emailInput, na qual é do tipo const, sendo esse o tipo que não é possível alterar o valor dentro da mesma. associando à variável através do DOM a id = 'email'
const emailInput = document.getElementById('email');
// Declara a variável emailInput, na qual é do tipo const, sendo esse o tipo que não é possível alterar o valor dentro da mesma. associando à variável através do DOM a id = 'emailFeedback'
const emailFeedback = document.getElementById('emailFeedback');

// É feita a validação do email através da variável emailInput, utilizando a variável isValid como parâmetro se o que foi inserido dentro do inpu é realmente um email
emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value;
    const isValid = /\\S+@\\S+\\.\\S+/.test(emailValue);
    emailFeedback.textContent = isValid ? 'E-mail válido!' : 'E-mail inválido!';
});

// Scroll suave para voltar ao início

// Determina quando ficará visível o botão de scrollar a tela para o início automaticamente
window.onscroll = () => {
    scrollToTopBtn.style.display = document.documentElement.scrollTop > 100 ? 'block' : 'none';
};

// Determina que caso a variável scrollToTopBtn for clicada o site irá scrollar automaticamente até o início da página
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menu hambúrguer

// Declara a variável menuToggle, na qual é do tipo const, sendo esse o tipo que não é possível alterar o valor dentro da mesma. associando à variável através do DOM a id = 'menuToggle'
const menuToggle = document.getElementById('menuToggle');
// Declara a variável menuToggle, na qual é do tipo const, sendo esse o tipo que não é possível alterar o valor dentro da mesma. associando à variável através do DOM a id = 'navList'
const navList = document.getElementById('navList');

// Define que o evento de mostrar o nav na interace mobile será ativo quando a variável menuToggle ser clicado
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
}); 
