/* Show/hide server info */

const pi1Btn = document.querySelector("#pi1-btn");
const pi2Btn = document.querySelector("#pi2-btn");
const odroid1Btn = document.querySelector("#odroid1-btn");
const pi1Info = document.querySelector(".info-pi1");
const pi2Info = document.querySelector(".info-pi2");
const odroid1Info = document.querySelector(".info-odroid1");

pi1Btn.addEventListener('click', () => {
    pi1Info.style.display = "block";
    pi2Info.style.display = "none";
    odroid1Info.style.display = "none";
})

pi2Btn.addEventListener('click', () => {
    pi2Info.style.display = "block";
    pi1Info.style.display = "none";
    odroid1Info.style.display = "none";
})

odroid1Btn.addEventListener('click', () => {
    pi1Info.style.display = "none";
    pi2Info.style.display = "none";
    odroid1Info.style.display = "block";
})


