const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) =>{
    evento.preventDefault()
    const input = document.querySelector("[ data-form-input]");
    const value = input.value
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card")
    input.value = '';
    const contect = `  <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i> `

    task.innerHTML = contect;

    list.appendChild(task)

    console.log(contect);
};

console.log(btn);

// arrow funtions  o funciones flechas 
btn.addEventListener('click', createTask)