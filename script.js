// Constants
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputText = document.getElementById("output");

// Event Listeners
convertBtn.addEventListener("click", intToRom);

// Functions
function intToRom() {
    let value = numberInput.value;
    let convertedRom = "";
    if (outputText.classList.contains("hidden")) {
        outputText.classList.toggle("hidden");
    }
    if (value === "" || isNaN(value)) {
        outputText.innerText = "Please enter a valid number";
    }
    else if (value < 0) {
        outputText.innerText = "Please enter a number greater than or equal to 1";
    }
    else if (value >= 4000) {
        outputText.innerText = "Please enter a number less than or equal to 3999";
    }
    else {
        while (value != 0) {
            if (value >= 1000) {
                value -= 1000;
                convertedRom += "M";
            }
            else if (value >= 900) {
                value -= 900;
                convertedRom += "CM";
            }
            else if (value >= 500) {
                value -= 500;
                convertedRom += "D";
            }
            else if (value >= 400) {
                value -= 400;
                convertedRom += "CD";
            }
            else if (value >= 100) {
                value -= 100;
                convertedRom += "C";
            }
            else if (value >= 90) {
                value -= 90;
                convertedRom += "XC";
            }
            else if (value >= 50) {
                value -= 50;
                convertedRom += "L";
            }
            else if (value >= 40) {
                value -= 40;
                convertedRom += "XL";
            }
            else if (value >= 10) {
                value -= 10;
                convertedRom += "X";
            }
            else if (value >= 9) {
                value -= 9;
                convertedRom += "IX";
            }
            else if (value >= 5) {
                value -= 5;
                convertedRom += "V";
            }
            else if (value >= 1) {
                value -= 1;
                convertedRom += "I";
            }
        }
        outputText.innerText = convertedRom;
    }
}