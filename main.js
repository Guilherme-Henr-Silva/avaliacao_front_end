// Pegando os elementos do DOM
const form = document.getElementById('formulario-tarefa');
const tarefa = document.getElementById('tarefa');
const lista = document.getElementById('lista-tarefas');

// Criando um array para armazenar as tarefas
let tarefas = [];

// Criando um evento para capturar o envio do formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    adicionarTarefa(tarefa.value);
    tarefa.value = "";
});