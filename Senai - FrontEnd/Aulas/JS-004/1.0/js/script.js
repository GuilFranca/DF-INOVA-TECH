// Array para armazenar os produtos inseridos
let produtos = []; // 0 cochetes define a Array
let total = 0; // Valor inical

// Elementos do DOM
const produtoInput = document.getElementById("produto");
//Criamos uma variável const para o input dos formulários
//Solicitamos o DOM para alteração dos elementos do ID selecionados pelo getElement

const valorInput = document.getElementById("Valor");
const tabela = document.getElementById("tabelaProdutos");
const tbody = tabela.querySelector("tbody");
//querySelector irá auxiliar na criação das linhas e células para os itens inseridos, este comando seleciona e permite alterações sem a necessidade de inserção

const totalElement = document.getElementById("total");

//Função para adicionar um produto ao array e autorizar a tabela
document.getElementById("adicionar").addEventListener("click", function(){
    const nomeProduto = produtoInput.value;
    const valorProduto = parseFloat(valorInput.value);

    if(nomeProduto && !isNaN(valorProduto) && valorProduto > 0){

        //Adiciona o produto ao array 
        produtos.push({nome: nomeProduto, valor: valorProduto});

        //Adiciona o valor total
        total += valorProduto;

        //Limpa os campos de entrada
        produtoInput.value = '';
        valorInput.value = '';
    } else {
        alert("Por favor, insira um nome de produto válido e um valor numérico positivo");
    }

});

//Função para exibir a tabela com os produtos
document.getElementById("visualizarTabela").addEventListener("click", function(){

    //Limpa a tabela
    tbody.innerHTML = '';

    //Adiciona cada produto na tabela
    produtos.forEach(function(produto){
        let linha = document.createElement("tr");
        let nomeCell = document.createElement("td");
        let valorCell = document.createElement("td");

        nomeCell.textContent = produto.nome;
        valorCell.textContent = "R$ " + produto.valor.tofixed(2);

        linha.appendChild(nomeCell);
        linha.appendChild(valorCell);
        tbody.appendChild(linha);

    });

    //Atualiza o total no rodapé da tabela
    totalElement.textContent = "R$ " + total.toFixed(2);

    //Exibe a tabela 
    tabela.classList.remove("oculto");

});