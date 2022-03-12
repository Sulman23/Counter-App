// Selecting Elements
let count = document.getElementById("number");
let minus = document.getElementById("sub");
let reset = document.getElementById("reset");
let plus = document.getElementById("add");

// add color on plus and minus
function addColor() {
    if (count.innerHTML > 0) {
        count.style.color = "green";
    } else if (count.innerHTML < 0) {
        count.style.color = "red";
    }
    else {
        count.style.color = "black";
    }   
}

//Plus and Minus and Reset on Clicks
minus.addEventListener("click", () => {
   count.innerText--;
   addColor();
});

plus.addEventListener("click", () => {
    count.innerText++;
    addColor();
});

reset.addEventListener("click", () => {
    count.innerText = 0;
    addColor();
});
