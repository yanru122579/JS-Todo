//getting all required emements
const inputBox = document.querySelector('.inputField input')
const addBtn = document.querySelector('.inputField button')
const removeBtn = document.querySelector('.footer button')
const todoList = document.querySelector('.todolist')

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;//getting user entered value
    console.log(userData);
    if(userData.trim() != 0){//if user values aren't only space
        addBtn.classList.add('active')//active the add button
    }else{
        addBtn.classList.remove('active')
    }
}
showTasks()

addBtn.onclick=()=>{
    let userData = inputBox.value
    let getLocalStorage = localStorage.getItem('New Todo')
    if(getLocalStorage === null){
        listArr = []
    }else(
        listArr = JSON.parse(getLocalStorage)
    )
    listArr.push(userData)
    localStorage.setItem('New Todo',JSON.stringify(listArr))
    showTasks()
    addBtn.classList.remove('active')
}

function showTasks(){
    let getLocalStorage = localStorage.getItem('New Todo')
    if(getLocalStorage === null){
        listArr = []
    }else(
        listArr = JSON.parse(getLocalStorage)
    )
    const pendingNumb=document.querySelector('.pendingNumb')
    pendingNumb.textContent = listArr.length
    
    if(listArr.length > 0){
        removeBtn.classList.add('active')
    }else{
        removeBtn.classList.remove('active')
    }
    let newLiTag = ''
    listArr.forEach((e,i)=>{
        newLiTag +=`<li>${e}<span onclick="deleteTask(${i})"><i class="fas fa-trash"></i></span></li>`
    })
    todoList.innerHTML = newLiTag
    inputBox.value=''
}
function deleteTask(index){
    let getLocalStorage = localStorage.getItem('New Todo')
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(index,1)
    localStorage.setItem('New Todo',JSON.stringify(listArr))
    showTasks()
}
removeBtn.onclick=()=>{
    listArr=[]
    localStorage.setItem('New Todo',JSON.stringify(listArr))
    showTasks()

}