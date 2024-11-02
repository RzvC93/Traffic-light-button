const selectedBtn = document.getElementById("btn");
const colours = ["btn-warning", "btn-success", "btn-danger"];
let clickCount = 0;
const INTERVAL_MS = 10000;

function changeTrafficLightColor() {
    selectedBtn.classList.remove(...colours);
    selectedBtn.classList.add(colours[clickCount]);
    clickCount = (clickCount + 1) % colours.length;
}

function startTrafficLightCycle() {
    setInterval(changeTrafficLightColor, INTERVAL_MS);
}

startTrafficLightCycle();