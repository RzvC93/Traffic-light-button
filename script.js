function changeBtnColor() {
    const selectedBtn = document.getElementById("btn");
    let clickCount = 0;

    function updateBtnColor() {
        ++clickCount;
        if (clickCount === 1) {
            btn.classList.remove("btn-danger", "btn-success");
            btn.classList.add("btn-warning"); 
        } else if (clickCount === 2) {
            btn.classList.remove("btn-warning");
            btn.classList.add("btn-success"); 
        } else {
            btn.classList.remove("btn-success");
            btn.classList.add("btn-danger");
            clickCount = 0; 
        }
    }
    btn.addEventListener("click", updateBtnColor);
    setInterval(updateBtnColor, 10000);
}
changeBtnColor();