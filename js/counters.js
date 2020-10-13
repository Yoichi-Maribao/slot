let totalCounter = 0;
let playCounter = 0;
let bonus = 0;
const totalEmptyDigits = document.getElementById('totalEmptyDigits');
const emptyDigits = document.getElementById('emptyDigits');
const playEmptyDigits = document.getElementById('playEmptyDigits');

function setCount() {
    document.getElementById('totalCounter').innerHTML = totalCounter;
    document.getElementById('bonus').innerHTML = bonus;
    document.getElementById('playCounter').innerHTML = totalCounter;
    let arrayCounter = [
        [totalCounter, totalEmptyDigits],
        [bonus, emptyDigits],
        [playCounter, playEmptyDigits]
    ]
    for(let j = 0; j < 3; j++){
        if(arrayCounter[j][0] < 10){
            arrayCounter[j][1].textContent = "000";
        } else if(arrayCounter[j][0] >= 10 && arrayCounter[j][0] < 100) {
            arrayCounter[j][1].textContent = "00";
        } else if(arrayCounter[j][0] >= 100 && arrayCounter[j][0] < 1000) {
            arrayCounter[j][1].textContent = "0";
        } else if(arrayCounter[j][0] >= 1000) {
            arrayCounter[j][1].textContent = "";
        }
    }
}
setCount();