/* Show/hide server info */

const pi1Btn = document.querySelector("#pi1-btn");
const pi2Btn = document.querySelector("#pi2-btn");
const odroid1Btn = document.querySelector("#odroid1-btn");
const defaultInfo = document.querySelector(".info-default");
const pi1Info = document.querySelector(".info-pi1");
const pi2Info = document.querySelector(".info-pi2");
const odroid1Info = document.querySelector(".info-odroid1");

pi1Btn.addEventListener('click', () => {
    defaultInfo.style.display = "none";
    pi1Info.style.display = "block";
    document.getElementById("pi1-btn").classList.add("btn-selected");
    pi2Info.style.display = "none";
    document.getElementById("pi2-btn").classList.remove("btn-selected");
    odroid1Info.style.display = "none";
    document.getElementById("odroid1-btn").classList.remove("btn-selected");
})

pi2Btn.addEventListener('click', () => {
    defaultInfo.style.display = "none";
    pi2Info.style.display = "block";
    document.getElementById("pi1-btn").classList.remove("btn-selected");
    pi1Info.style.display = "none";
    document.getElementById("pi2-btn").classList.add("btn-selected");
    odroid1Info.style.display = "none";
    document.getElementById("odroid1-btn").classList.remove("btn-selected");
})

odroid1Btn.addEventListener('click', () => {
    defaultInfo.style.display = "none";
    pi1Info.style.display = "none";
    document.getElementById("pi1-btn").classList.remove("btn-selected");
    pi2Info.style.display = "none";
    document.getElementById("pi2-btn").classList.remove("btn-selected");
    odroid1Info.style.display = "block";
    document.getElementById("odroid1-btn").classList.add("btn-selected");
})

/* Change button layout */


