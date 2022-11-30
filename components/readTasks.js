import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";

export const displayTasks = () =>{

    //console.log(uuid.v4())

    const list = document.querySelector("[data-list]");

    const taskList = JSON.parse(localStorage.getItem("task")) || [] ;
    //console.log(taskList)
    //console.log(dateElement("14/07/2022"));
    const dates = uniqueDates(taskList);
     orderDates(dates);
    //console.log(dates)
    
    dates.forEach(date => {
        const dateMoment = moment(date,"DD/MM/YYYY");

        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
           const taskDate = moment(task.dateFormat,"DD/MM/YYYY");
           
           const diff = dateMoment.diff(taskDate);
           //console.log(diff);
           if (diff===0) {
            list.appendChild(createTask(task));
           
           }
    
        });
    });


};