//Show/hide server info and Change button styling when selected
//Change focus to info when you select a server
//Return info to default and change focus to server selection

const infoBox = document.querySelectorAll(".info-box");
const serverBtn = document.querySelectorAll(".server-btn");

function pi1Click() {
  infoBox.forEach((box) => {
    box.classList.add("hidden");
  });
  document.getElementById("info-pi1").classList.remove("hidden");

  serverBtn.forEach((btn) => {
    btn.classList.remove("btn-selected");
  });
  document.getElementById("pi1-btn").classList.add("btn-selected");
}

function pi2Click() {
  infoBox.forEach((box) => {
    box.classList.add("hidden");
  });
  document.getElementById("info-pi2").classList.remove("hidden");

  serverBtn.forEach((btn) => {
    btn.classList.remove("btn-selected");
  });
  document.getElementById("pi2-btn").classList.add("btn-selected");
}

function odroid1Click() {
  infoBox.forEach((box) => {
    box.classList.add("hidden");
  });
  document.getElementById("info-odroid1").classList.remove("hidden");

  serverBtn.forEach((btn) => {
    btn.classList.remove("btn-selected");
  });
  document.getElementById("odroid1-btn").classList.add("btn-selected");
}

//FIX SCROLL CANCELING scrollintoview
