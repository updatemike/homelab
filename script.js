/* Show/hide server info and Change button styling when selected */

const pi1Btn = document.querySelector("#pi1-btn");
const pi2Btn = document.querySelector("#pi2-btn");
const odroid1Btn = document.querySelector("#odroid1-btn");
const defaultInfo = document.querySelector("#info-default");
const pi1Info = document.querySelector("#info-pi1");
const pi2Info = document.querySelector("#info-pi2");
const odroid1Info = document.querySelector("#info-odroid1");
const infoBox = document.querySelectorAll(".info-box");
const serverBtn = document.querySelectorAll(".server-btn")

pi1Btn.addEventListener('click', () => {
    infoBox.forEach(box => { box.classList.add("hidden") })
    pi1Info.classList.remove("hidden");

    serverBtn.forEach(btn => { btn.classList.remove("btn-selected") })
    document.getElementById("pi1-btn").classList.add("btn-selected");
})

pi2Btn.addEventListener('click', () => {
    infoBox.forEach(box => { box.classList.add("hidden") })
    pi2Info.classList.remove("hidden");

    serverBtn.forEach(btn => { btn.classList.remove("btn-selected") })
    document.getElementById("pi2-btn").classList.add("btn-selected");
})

odroid1Btn.addEventListener('click', () => {
    infoBox.forEach(box => { box.classList.add("hidden") })
    odroid1Info.classList.remove("hidden");

    serverBtn.forEach(btn => { btn.classList.remove("btn-selected") })
    document.getElementById("odroid1-btn").classList.add("btn-selected");
})

/*  */


