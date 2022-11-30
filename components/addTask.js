import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";

export const addTask = (e) => {
    e.preventDefault();
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]")
    //console.log(calendar);
    const value = input.value;
    const date = calendar.value;
    //console.log(moment(date).format("DD/MM/YYYY"))
    //console.log(date);
    const dateFormat = moment(date).format("DD/MM/YYYY");
   // console.log(dateFormat);

    if(value==="" || date === ""){
        //console.log("vacios")
        return;
    }

    input.value="";
    calendar.value="";

    const complete = false;

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    };

    list.innerHTML="";

    const taskList = JSON.parse(localStorage.getItem("task"))  || [];
    taskList.push(taskObj);
    //sessionStorage.setItem("task", JSON.stringify(taskObj) );
    localStorage.setItem("task", JSON.stringify(taskList) );

    displayTasks();

   // const task = createTask(taskObj); 
   // list.appendChild(task);
};



//arrow functions o funciones anonimas
export const createTask = ({value,dateFormat,complete,id})=>{
    
    const task = document.createElement("li");
          task.classList.add("card");
   

    const taskContent = document.createElement("div");
    //console.log(value,dateFormat);
    console.log(complete);
    const check = checkComplete(id);
    if (complete) {
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon")
        check.classList.toggle("far");  
    }
    const titleTask = document.createElement("span");
          titleTask.classList.add("task");
          titleTask.innerText=value;
          taskContent.appendChild(check);
          taskContent.appendChild(titleTask);
    //taskContent.appendChild(deleteIcon());
    //task.innerHTML=content;
    const dateElement = document.createElement("span");
          dateElement.innerHTML= dateFormat;
    //console.log(dateElement);
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon(id));
    
    return task;
    
  
};