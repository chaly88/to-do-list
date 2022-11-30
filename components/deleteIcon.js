import { displayTasks } from "./readTasks.js";

const deleteIcon = (id)=>{

    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click",()=>deleteTask(id));
    return i;
}
const deleteTask = (id)=>{
    const li = document.querySelector("[data-list]");
   // console.log("id",id);
   // const parent = e.target.parentElement;
    //parent.remove();
    const tasks = JSON.parse(localStorage.getItem("task"));
    const index = tasks.findIndex((item)=>item.id===id);

    console.log(index);
    //tasks.splice(id,1);
    tasks.splice(index,1);
    li.innerHTML = "";
    console.log(tasks);
    localStorage.setItem("task",JSON.stringify(tasks))
    displayTasks();
}

export default deleteIcon