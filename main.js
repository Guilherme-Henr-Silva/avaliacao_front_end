// Pegando os elementos do DOM
const formulario = document.getElementById("formulario-tarefa");
const tarefa = document.getElementById("tarefa");
const lista = document.getElementById("lista-tarefas");

// Criando um array para armazenar as tarefas
let tarefas = [];

// Criando um evento para capturar o envio do formulário
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que a página recarregue
    adicionarTarefa(tarefa.value);
    tarefa.value = ""; // Limpa o campo de input
});

// Função para adicionar uma nova tarefa no array
function adicionarTarefa(texto) {
    tarefas.push({ descricao: texto, concluida: false }); // Adiciona tarefa nova
    renderizarTarefas(); // Atualiza a lista na tela
}

// Função para remover uma tarefa
function removerTarefa(index) {
    tarefas.splice(index, 1); // Remove tarefa do array
    renderizarTarefas();
}

// Função para editar o texto da tarefa
function editarTarefa(index) {
    const novaDescricao = prompt("Editar tarefa:", tarefas[index].descricao); // Pergunta novo texto
    if (novaDescricao) {
        tarefas[index].descricao = novaDescricao; // Atualiza o texto
        renderizarTarefas();
    }
}

// Função para marcar ou desmarcar uma tarefa como concluída
function marcarConcluida(index) {
    tarefas[index].concluida = !tarefas[index].concluida; // Alterna o status
    renderizarTarefas();
}

// Função para redesenhar toda a lista de tarefas na página
function renderizarTarefas() {
    lista.innerHTML = ""; // Limpa a lista

    tarefas.forEach((tarefaItem, index) => {
        const li = document.createElement("li"); // Cria elemento da lista
        li.className = tarefaItem.concluida ? "concluida" : ""; // Aplica classe se concluida

        const span = document.createElement("span"); // Cria o texto da tarefa
        span.textContent = tarefaItem.descricao;

        const checkbox = document.createElement("input"); // Cria o checkbox
        checkbox.type = "checkbox";
        checkbox.checked = tarefaItem.concluida; // Marca se estiver concluída
        checkbox.addEventListener("change", () => marcarConcluida(index)); // Evento para marcar concluida

        const botoes = document.createElement("div"); // Div para os botões
        botoes.className = "botoes";

        const botaoEditar = document.createElement("button"); // Botão de editar
        botaoEditar.textContent = "Editar";
        botaoEditar.className = "editar";
        botaoEditar.addEventListener("click", () => editarTarefa(index));

        const botaoRemover = document.createElement("button"); // Botão de remover
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", () => removerTarefa(index));

        // Adiciona botões dentro da div
        botoes.appendChild(botaoEditar);
        botoes.appendChild(botaoRemover);

        // Adiciona checkbox, texto e botões dentro do item da lista
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(botoes);

        // Adiciona o item na lista principal
        lista.appendChild(li);
    });
}