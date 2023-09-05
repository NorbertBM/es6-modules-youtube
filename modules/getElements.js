export default function getElements() {
  //   const h1 = document.querySelector("h1");
  //   console.log(h1);
  //   return { h1 };

  const form = document.querySelector("form");
  const alertsContainer = document.querySelector("#alertsContainer");
  const taskInput = document.querySelector("#taskInput");
  const addTaskBtn = document.querySelector("#addTaskBtn");
  const taskList = document.querySelector("#taskList");
  form.onsubmit = (e) => {
    e.preventDefault();
  };

  return { form, alertsContainer, taskInput, addTaskBtn, taskList };
}
