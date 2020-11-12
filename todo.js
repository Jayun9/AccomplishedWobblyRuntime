const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "todos";

function loadTodos() {
    const toDos = localStorage.getItem(TODOS_LS);
}

function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerText = 'x';
    const span = document.createElement('span');
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init() {
    loadTodos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();
