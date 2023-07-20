( () => { 

const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) =>{
    evento.preventDefault()
    const input = document.querySelector("[ data-form-input]");
    const value = input.value
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card")
    input.value = '';
    console.log(checkComplete());
    const taskContect = document.createElement("div")
    
    const taskTitle = document.createElement("span")
    taskTitle.classList.add("task")
    taskTitle.innerText = value
    taskContect.appendChild(checkComplete())
    taskContect.appendChild(taskTitle)
    const contect = `
            
        <i class="fas fa-trash-alt trashIcon icon"></i> `

    // task.innerHTML = contect;
    task.appendChild(taskContect)

    list.appendChild(task)

    console.log(contect);
};

console.log(btn);

// arrow funtions  o funciones flechas 
btn.addEventListener('click', createTask)

const checkComplete = () =>{
    const i = document.createElement('i')
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener('click', completeTask)
    return i
}

// Immediately invoked funtions expression IIFE
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon')
    element.classList.toggle('far');
}

})()