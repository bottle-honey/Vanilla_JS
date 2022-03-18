const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list li");
const toDos = [];
const TODOS_KEY = "toDos";
function savingToDos(){
    localStorage.setItem(TODOS_KEY,toDos);
}
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(toDo){
    const button = document.createElement("button");
    button.innerText = "Del";
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = toDo;
    todoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    toDos.push(todo);
    paintTodo(todo);
}

todoForm.addEventListener("submit", handleToDoSubmit);


const savedTodos = localstorage.getItem(TODOS_KEY);


if (savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach();
}