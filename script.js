const input=document.querySelector('input')
const addBtn = document.querySelector('#btn')
const output = document.querySelector('#output')
const todo=[]

function check(target, todo)
{
    for(let i=0;i<todo.length;i++){
        if(todo[i]===target){
            return false
        }
    }
    return true
}

function result(){
 const target=input.value.trim()
 if(check(target,todo)){
    todo.push(target)
    console.log(todo)
    output.innerHTML=''
    for(let i=0;i<todo.length;i++){
        output.innerHTML=
        `
        <div class="card">${todo[i]}</div>
        `
    }
    input.value=""
 }

}




addBtn.addEventListener('click', result)