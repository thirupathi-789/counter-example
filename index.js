let clearBtnEl = document.getElementById("clearBtn");
let counterValueEl = document.getElementById("counterValue");

let counter = 0;

let uniqueId = setInterval( function() {
    counter += 1;
    counterValueEl.textContent = counter;
}, 1000);


clearBtnEl.onclick = () => {
    clearInterval(uniqueId);
    counterValueEl.textContent = "";
}
