export default function createTaskItem(task) {
  const li = document.createElement("li");

  li.className = "alert";
  li.innerHTML = task;
  return li;
}
