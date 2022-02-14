let form = document.getElementById('todo-form');
let task = document.getElementById('newTask');

let tasks =[];


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let input = task.value;
    if(input !== ''){
        addTask(input);
        task.value = '';
    }
    else{
        alert('Please enter the task before adding.');
    }
});

function addTask(task){
    const todo = {
        task,
        completed: false,
        id: new Date().getTime()
    };
    tasks.push(todo);
    console.log("TODO",todo);
    console.log("Tasks Array",tasks);
}
