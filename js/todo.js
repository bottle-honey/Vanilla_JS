const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list li");

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
    paintTodo(todo);
}

todoForm.addEventListener("submit", handleToDoSubmit);

