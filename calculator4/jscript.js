const disp = document.getElementById("disp");
let reset = false;

//btns.addEventListener("click", ud);

const buttons = document.querySelectorAll(".btn");
const clbtn = document.querySelector(".cl");
const eqbtn = document.querySelector(".eq");
buttons.forEach(btn => btn.addEventListener("click", ud));
clbtn.addEventListener("click", clc);
eqbtn.addEventListener("click", equals);

function ud() {
    if (reset) {
        disp.value = "";
    }
    disp.value += this.textContent;
    reset = false;
}

function equals() {
    result = eval(disp.value);
    disp.value = result;
    reset = true;
}

function clc() {
    disp.value = '';
}

