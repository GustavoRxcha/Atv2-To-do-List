// Função para recuperar as tarefas do localStorage ao carregar a página
window.onload = function() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        document.getElementById("taskList").innerHTML = savedTasks;
    }
}

/**
 * Adiciona uma nova tarefa à lista de tarefas e salva no localStorage.
 */
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = '<input type="checkbox" onchange="toggleTaskStatus(this)">' + taskText + '<button class="editButton" onclick="editTask(this)">Editar</button><button class="ocultButton" onclick="hideTask(this)">Ocultar</button>';
    taskList.appendChild(li);

    // Salvar tarefas no localStorage
    localStorage.setItem("tasks", taskList.innerHTML);

    input.value = "";
}

/**
 * Permite ao usuário editar o texto de uma tarefa existente e atualiza no localStorage.
 * @param {HTMLElement} button O botão de edição associado à tarefa.
 */
function editTask(button) {
    let li = button.parentElement;
    let newText = prompt("Editar Tarefa", li.childNodes[1].nodeValue);
    if (newText !== null && newText.trim() !== "") {
        li.childNodes[1].nodeValue = newText.trim();
        // Atualizar tarefas no localStorage
        localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
    }
}

/**
 * Oculta uma tarefa da lista quando o botão "Ocultar" é clicado e atualiza no localStorage.
 * @param {HTMLElement} button O botão "Ocultar" associado à tarefa.
 */
function hideTask(button) {
    let li = button.parentElement;
    li.classList.add("hide");
    li.classList.remove("task");
    // Atualizar tarefas no localStorage
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

/**
 * Alterna o status de uma tarefa entre concluída e não concluída quando a checkbox é clicada e atualiza no localStorage.
 * @param {HTMLInputElement} checkbox A checkbox associada à tarefa.
 */
function toggleTaskStatus(checkbox) {
    let li = checkbox.parentElement;
    if (checkbox.checked) {
        li.classList.add("completed");
    } else {
        li.classList.remove("completed");
    }
    // Atualizar tarefas no localStorage
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

/**
 * Remove todas as tarefas da lista e limpa o localStorage.
 */
function resetTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Remove todas as tarefas
    // Limpar tarefas do localStorage
    localStorage.removeItem("tasks");
}
