import { elements } from "./modules/elements.js";
import createTask from "./modules/taskItem.js";
import { customAlert } from "./modules/components/alert.js";
import { taskCompleted } from "./modules/utilities/completedTask.js";
const { form, alertsContainer, taskInput, addTaskBtn, taskList } = elements();

console.log(alertsContainer);

addTaskBtn.onclick = () => {
  if (taskInput.value === "") {
    customAlert(alertsContainer, "Please enter a task");
  } else {
    customAlert(alertsContainer, "Task added !", "success");
    //   alert("click");
    const taskText = taskInput.value;
    if (taskText) {
      const taskElement = createTask(taskText);
      taskList.appendChild(taskElement);
      taskInput.value = "";
      taskCompleted();
    }
  }
};
