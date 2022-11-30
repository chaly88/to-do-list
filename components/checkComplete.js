const checkComplete = (id)=>{
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click",(e)=>completeTask(e,id));
    return i;
}

const completeTask = (e,id)=>{
const element = e.target;
element.classList.toggle("fas");
element.classList.toggle("completeIcon")
element.classList.toggle("far");
console.log("check id",id);
const tasks = JSON.parse(localStorage.getItem("task"));
//console.log(tasks);
const index = tasks.findIndex((item) => item.id === id);
//console.log(index);
tasks[index]["complete"]= !tasks[index]["complete"];

localStorage.setItem("task",JSON.stringify(tasks));

console.log(tasks);
}

export default checkComplete