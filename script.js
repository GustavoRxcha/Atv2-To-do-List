/**
 * Adiciona uma nova tarefa à lista de tarefas.
 */
function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    if (taskText === "") return;

    var taskList = document.getElementById("taskList");

    var li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = '<input type="checkbox" onchange="toggleTaskStatus(this)">' + taskText + '<button class="editButton" onclick="editTask(this)">Editar</button><button class="ocultButton" onclick="hideTask(this)">Ocultar</button>';
    taskList.appendChild(li);

    input.value = "";
}

/**
 * Permite ao usuário editar o texto de uma tarefa existente.
 * @param {HTMLElement} button O botão de edição associado à tarefa.
 */
function editTask(button) {
    var li = button.parentElement;
    var newText = prompt("Editar Tarefa", li.childNodes[1].nodeValue);
    if (newText !== null && newText.trim() !== "") {
        li.childNodes[1].nodeValue = newText.trim();
    }
}

/**
 * Oculta uma tarefa da lista quando o botão "Ocultar" é clicado.
 * @param {HTMLElement} button O botão "Ocultar" associado à tarefa.
 */
function hideTask(button) {
    var li = button.parentElement;
    li.classList.add("hide");
    li.classList.remove("task");
}

/**
 * Alterna o status de uma tarefa entre concluída e não concluída quando a checkbox é clicada.
 * @param {HTMLInputElement} checkbox A checkbox associada à tarefa.
 */
function toggleTaskStatus(checkbox) {
    var li = checkbox.parentElement;
    if (checkbox.checked) {
        li.classList.add("completed");
    } else {
        li.classList.remove("completed");
    }
}

/**
 * Remove todas as tarefas da lista.
 */
function resetTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Remove todas as tarefas
}
