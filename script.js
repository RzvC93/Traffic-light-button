function changeBtnColor() {
    const selectedBtn = document.getElementById("btn");
    const colours = ["btn-warning", "btn-success", "btn-danger"];
    let clickCount = 0;

    function updateBtnColor() {
        selectedBtn.classList.remove(...colours);
        selectedBtn.classList.add(colours[clickCount]);
        clickCount = (clickCount + 1) % colours.length;
        console.log("test");
    }
    selectedBtn.addEventListener("click", updateBtnColor);
    setInterval(updateBtnColor, 10000);
    console.log("test interval");
}
changeBtnColor();