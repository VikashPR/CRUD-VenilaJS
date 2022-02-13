let form = document.getElementById('todo-form');
let task = document.getElementById('newTask');

let tasks =[];


form.addEventListener('submit', (e)=>{
    let input = task.value;
    addTask(input);
    e.preventDefault();
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