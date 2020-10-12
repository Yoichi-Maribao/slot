let totalCounter = 0;
let playCounter = 0;
let bonus = 0;
const totalEmptyDigits = document.getElementById('totalEmptyDigits');
const emptyDigits = document.getElementById('emptyDigits');

function setCount() {
    document.getElementById('totalCounter').innerHTML = totalCounter;
    document.getElementById('bonus').innerHTML = bonus;
    document.getElementById('playCounter').innerHTML = totalCounter;

    if(totalCounter < 10){
        totalEmptyDigits.textContent = "000";
    } else if(totalCounter >= 10 && totalCounter < 100) {
        totalEmptyDigits.textContent = "00";
    } else if(totalCounter >= 100 && totalCounter < 1000) {
        totalEmptyDigits.textContent = "0";
    } else if(totalCounter >= 1000) {
        totalEmptyDigits.textContent = "";
    }

    if(bonus < 10){
        emptyDigits.textContent = "000";
    } else if(bonus >= 10 && bonus < 100) {
        emptyDigits.textContent = "00";
    } else if(bonus >= 100 && bonus < 1000) {
        emptyDigits.textContent = "0";
    } else if(bonus >= 1000) {
        emptyDigits.textContent = "";
    }

    if(playCounter < 10){
        playEmptyDigits.textContent = "000";
    } else if(playCounter >= 10 && playCounter < 100) {
        playEmptyDigits.textContent = "00";
    } else if(playCounter >= 100 && playCounter < 1000) {
        playEmptyDigits.textContent = "0";
    } else if(playCounter >= 1000) {
        playEmptyDigits.textContent = "";
    }
}
setCount();