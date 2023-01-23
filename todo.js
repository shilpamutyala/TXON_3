let todoItemsContainer = document.getElementById("todoItemsContainer");
let onAddToDoButton = document.getElementById("addToDoButton")

let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },

];

onAddToDoButton.onclick = function() {
    onAddToDo()
}

function onDeleteToDo(todoId) {
    let todoElement = document.getElementById(todoId)
    todoItemsContainer.removeChild(todoElement)
}

function onToDoChangeStatusChange(checkBoxId, labelId) {
    let checkBoxElement = document.getElementById(checkBoxId)
    console.log(checkBoxElement.checked)

    let labelElement = document.getElementById(labelId)
    labelElement.classList.toggle("checked")
}

function createAndAppendTodo(todo) {
    let checkBoxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo
    let todoId = "todo" + todo.uniqueNo

    let todoElement = document.createElement("li");
    todoElement.id = todoId
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkBoxId;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onToDoChangeStatusChange(checkBoxId, labelId);
    }
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkBoxId);
    labelElement.id = labelId
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        onDeleteToDo(todoId)
    }
    deleteIconContainer.appendChild(deleteIcon);
}

function onAddToDo() {
    let todoCount = todoList.length
    todoCount = todoCount + 1
    let userInputElement = document.getElementById("todoUserInput")
    let userInputValue = userInputElement.value
    if (userInputValue === "") {
        alert("Enter Valid Input")
        return
    }

    let newToDo = {
        text: userInputValue,
        uniqueNo: todoCount,
    }
    createAndAppendTodo(newToDo)
    userInputElement.value = ""

}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}