function changeBtnColor() {
    const selectedBtn = document.getElementById("btn");
    let clickCount = 0;

    function updateBtnColor() {
        ++clickCount;
        if (clickCount === 1) {
            selectedBtn.classList.remove("btn-danger", "btn-success");
            selectedBtn.classList.add("btn-warning"); 
        } else if (clickCount === 2) {
            selectedBtn.classList.remove("btn-warning");
            selectedBtn.classList.add("btn-success"); 
        } else {
            selectedBtnbtn.classList.remove("btn-success");
            selectedBtnbtn.classList.add("btn-danger");
            clickCount = 0; 
        }
    }
    selectedBtn.addEventListener("click", updateBtnColor);
    setInterval(updateBtnColor, 10000);
}
changeBtnColor();