const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const session = document.querySelector(".session");

setInterval(time, 1000);

function time() {
  const date = new Date();
  hour.innerText = date.getHours();
  minute.innerText = date.getMinutes();
  second.innerText = date.getSeconds();
  if (hour <= 12) {
    session.innerText = "AM";
  } else {
    session.innerText = "PM";
  }
}
