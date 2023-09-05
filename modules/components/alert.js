export const customAlert = (
  alertsContainer,
  text = "Alert",
  type = "danger"
) => {
  const alert = document.createElement("div");

  alert.className = `alert alert-${type} fadeAlert`;
  alert.style.animationDelay = "2.6s";
  alert.innerHTML = text;

  alertsContainer.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 3000);
  return alert;
};
