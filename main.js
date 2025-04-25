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

// Função para adicionar uma nova tarefa no array
function adicionarTarefa(texto) {
    tarefas.push({ descricao: texto, concluida: false }); // Adiciona tarefa nova
    renderizarTarefas(); // Atualiza a lista na tela
}

// Função para remover uma tarefa
function removerTarefa(index) {
    tarefas.splice(index, 1); // Remove tarefa
    renderizarTarefas();
}

// Função para editar o texto da tarefa
function editarTarefa(index) {
    const novaDescricao = prompt('Editar tarefa:', tarefas[index].descricao); // Pergunta novo texto
    if (novaDescricao) {
        tarefas[index].descricao = novaDescricao; // Atualiza o texto
        renderizarTarefas();
    }
}