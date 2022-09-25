let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let countDown = 10;
let interValid = setInterval(function() {
    countDown = countDown - 1;
    timerEl.textContent = countDown;
    if (countDown === 0) {
        timerEl.textContent = "BOOMED";
        clearInterval(interValid);
    }
}, 1000);
defuserEl.addEventListener("keydown", function(event) {
    let defuserText = defuserEl.value;
    if (event.key === "Enter" && defuserText === "defuse" && countDown !== 0) {
        timerEl.textContent = "Diffused Successfully!!!";
        clearInterval(interValid);
    }
});