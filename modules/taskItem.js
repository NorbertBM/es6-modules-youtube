export function createTaskItem(task) {
  console.log("task item");

  const li = document.createElement("li");
  li.className = "alert";
  li.innerHTML = task;

  return li;
}
