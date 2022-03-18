const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list li");

let toDos = [];

const TODOS_KEY = "toDos";

function savingToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));
    savingToDos();
}

function paintTodo(toDo){
    const button = document.createElement("button");
    button.innerText = "Del";
    const li = document.createElement("li");
    li.id = toDo.id;
    const span = document.createElement("span");
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = toDo.text;
    todoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = "";
    const todoObj ={
        text:todo,
        id:Date.now(),
    }
    toDos.push(todoObj);
    paintTodo(todoObj);
    savingToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}