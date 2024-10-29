
function changeButonColor() {
    const btn = document.getElementById("btn");
    let clickCount = 0; 

    btn.addEventListener("click", function() {
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
    });

    setInterval(function() {
        clickCount++; 
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
    }, 10000);
}
changeButonColor();
