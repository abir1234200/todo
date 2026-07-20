const input = document.querySelector('input')
const addBtn = document.querySelector('#btn')
const output = document.querySelector('.output')

const todo = []

function check(val, arr) {
    if (val === "") return false
    for (let i = 0; i < arr.length; i++) {
        if (val === arr[i].title) {
            alert("Todo already exists")
            return false
        }
    }
    return true
}

function doneTodo(i) {
    todo[i].completed = !todo[i].completed
    console.log(todo)
    display()
}


function delTodo(id) {
    todo.splice(id, 1)
    display()
    console.log(todo)
}



function display() {
    output.innerHTML = ""
    for (let i = 0; i < todo.length; i++) {
        output.innerHTML +=
            `
           <div class="card">
           <span class=${!todo[i].completed ? "abc" : "line"}>${todo[i].title}</span>
             <span>
             <button onclick='doneTodo(${i})'>${todo[i].completed ? "Undo" :"Done"}</button>
             <button onclick='delTodo(${i})'>Del</button>
             </span>
           </div>
            `
    }
}

function add() {
    const inputVal = input.value.trim()
    if (check(inputVal, todo)) {
        todo.push({
            title: inputVal,
            completed: false
        })
        console.log(todo)
        display()
    }
    input.value = ""
}


addBtn.addEventListener('click', add)

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') add()
})

