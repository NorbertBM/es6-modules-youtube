export function elements() {
  //   console.log("elements imported");
  const form = document.querySelector("form");
  form.onsubmit = (e) => {
    e.preventDefault();
  };
  //   console.log(form);

  const alertsContainer = document.getElementById("alerts-container");
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  return { form, alertsContainer, taskInput, addTaskBtn, taskList };
}
