function notify(message) {
  let messageNotification = document.getElementById("notification");
  messageNotification.innerHTML = message;
  messageNotification.style.display = "block";

  messageNotification.addEventListener('click', hideMessage );

  function hideMessage() {
    messageNotification.style.display = "none";
  }
}