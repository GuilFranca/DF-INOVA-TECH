// Array de alunos (inicialmente vazio)
let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

// Função para cadastrar um novo aluno
document.getElementById('alunoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;
    const emails = document.getElementById('emails').value;

    const novoAluno = { nome, idade, curso, emails };
    alunos.push(novoAluno);

    // Salva os alunos no localStorage
    localStorage.setItem('alunos', JSON.stringify(alunos));

    // Redireciona para a página de lista
    // window.location.href = 'lista_alunos.html';
    window.open('lista_alunos.html', '_blank');
});

document.getElementById('btn-display').addEventListener('click', function(){

    const tabela = document.getElementById('container-tabela');
    const botao = document.getElementById('btn-display');

    // document.getElementById('container-tabela').style.display = 'block';
    if(tabela.style.display === 'none' || tabela.style.display === ''){
        tabela.style.display = 'block';
        botao.textContent = 'Esconder Lista';
        botao.classList.add('esconder');
    } else {
        tabela.style.display = 'none';
        botao.textContent = 'Mostrar Lista';
        botao.classList.remove('esconder');
    }
});


// Referência ao corpo da tabela
const alunosTableBody = document.getElementById('alunosTable').getElementsByTagName('tbody')[0];

// Limpa a tabela antes de preenchê-la (caso haja múltiplos carregamentos)
alunosTableBody.innerHTML = '';

// Preenche a tabela com os dados dos alunos
alunos.forEach(aluno => {
    const row = alunosTableBody.insertRow();

    row.insertCell(0).textContent = aluno.nome;
    row.insertCell(1).textContent = aluno.idade;
    row.insertCell(2).textContent = aluno.curso;
    row.insertCell(3).textContent = aluno.emails;
});
