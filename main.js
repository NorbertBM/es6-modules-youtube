console.log("main js file");
import domElements from "./modules/getElements.js";
import { createTaskItem } from "./modules/taskItem.js";
import { completedTask } from "./modules/utilities/completedTask.js";
import { customAlert } from "./modules/components/alert.js";
const { form, alertsContainer, taskInput, addTaskBtn, taskList } =
  domElements();

addTaskBtn.onclick = () => {
  if (taskInput.value === "") {
    // alert("Please enter a task !");
    customAlert(alertsContainer, "Please enter a task !");
  } else {
    // alert("Task added !");
    customAlert(alertsContainer, "Task added !", "success");
    const taskText = taskInput.value;
    if (taskText) {
      const taskElement = createTaskItem(taskText);
      taskList.appendChild(taskElement);
      taskInput.value = "";
      completedTask();
    }
  }
};

// console.log(form, alertsContainer, taskInput, addTaskBtn, taskList);
