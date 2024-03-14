// Variables
let trash = document.querySelectorAll('.trash')
let add = document.querySelector('.buttonDiv')
let container = document.querySelector('.task__tasks')
let newTemplate = document.getElementById('taskDivTemplate')
let finishedTemplate = document.getElementById('finishedTaskDivTemplate')
let input = document.querySelector('.inputDiv')
let counterOne = document.querySelector('.davalebebi')
let counterTwo = document.querySelector('.dasrulebuli')
let checkbox = document.querySelectorAll('.check')
let done = 0


// Firing Functions
function deleteDiv(e) {
    e.target.parentElement.remove()
    counterOne.value--
    if (e.target.parentElement.classList.value == 'finishedTaskDiv') {done--}
    changeStats()
}

function addDiv() {
    let newDiv = newTemplate.cloneNode(true);
    container.parentElement.appendChild(newDiv);
    newDiv.querySelector('.trash').addEventListener('click', deleteDiv)
    newDiv.querySelector('.check').addEventListener('click', finishTask)
    newDiv.style.display = "flex"
    newDiv.querySelector('.flexOne').value = input.value
    input.value = ''
    counterOne.value++
    changeStats()
}

function finishTask(e) {
    if (e.target.parentElement.classList.value == 'taskDiv') {
        e.target.parentElement.classList.remove('taskDiv');
        e.target.parentElement.classList.add('finishedTaskDiv');
        done++
    } else {
        e.target.parentElement.classList.remove('finishedTaskDiv');
        e.target.parentElement.classList.add('taskDiv');
        done--
    }
    changeStats()
}

function changeStats() {counterTwo.value = `${done} / ${counterOne.value}`}


// Calling Function
trash.forEach(trash => {trash.addEventListener('click', deleteDiv)})
checkbox.forEach(checkbox => {checkbox.addEventListener('click', finishTask)})
add.addEventListener('click', addDiv)