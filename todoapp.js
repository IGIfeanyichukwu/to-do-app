const allTodoItems = document.querySelectorAll("#todo-items li");


for (let i = 0; i < allTodoItems.length; i++) {
    let closeTodoBtn = document.createElement("span");

    let txt = document.createTextNode("\u00D7");

    closeTodoBtn.className = "close-todo-item";
    closeTodoBtn.appendChild(txt);
    allTodoItems[i].appendChild(closeTodoBtn);
}


const closeTodoBtn = document.querySelectorAll(".close-todo-item");

for (let i = 0; i < closeTodoBtn.length; i++) {
    closeTodoBtn[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

const todoItemsLists = document.querySelectorAll('#todo-items li');
todoItemsLists.forEach(todoItemsList => {
    todoItemsList.onclick = function () {
        todoItemsList.classList.toggle("checked");
    }
});

function addNewTodo() {
    var li = document.createElement("li");

    var inputValue = document.getElementById("todo-input").value;

    var t = document.createTextNode(inputValue);

    li.appendChild(t);
    if (inputValue === '') {
        alert("oops! there is no todo to add");
    } else {
        document.getElementById("todo-items").appendChild(li);
    }
    document.getElementById("todo-input").value = "";

    let newTodoCloseBtn = document.createElement("span");

    let txt = document.createTextNode("\u00D7");

    newTodoCloseBtn.className = "close-todo-item";
    newTodoCloseBtn.appendChild(txt);
    li.appendChild(newTodoCloseBtn);

    const closeTodoBtn = document.querySelectorAll(".close-todo-item");

    for (let i = 0; i < closeTodoBtn.length; i++) {
        closeTodoBtn[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    const todoItemsLists = document.querySelectorAll('#todo-items li');
    todoItemsLists.forEach(todoItemsList => {
        todoItemsList.onclick = function () {
            todoItemsList.classList.toggle("checked");
        }
    });
}

const inputBox = document.querySelector('.input-box');
inputBox.addEventListener('submit', function (e) {
    addNewTodo();
    e.preventDefault();
    e.stopImmediatePropagation();
}, false);
