function completedTask() {
  const tasks = document.querySelectorAll("#taskList li");

  tasks.forEach((task) => {
    if (task.onclick === null) {
      task.onclick = (e) => {
        e.target.classList.toggle("alert-success");
      };
    }
  });
}
export { completedTask };
