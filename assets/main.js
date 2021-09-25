const numberInput = document.querySelector('.number-input');
const resultText = document.querySelector('.result');
const memory = document.querySelectorAll('button');

function topclang(num) {
    let sIndex = num % 2;
    let index = Math.floor(num / 2);
    let result = String(sIndex);
    return function topclangtwo() {
        if (index / 2 == 1 || index / 2 == 0) {
            result += '0';
            result += Math.floor(index / 2);
            resultText.textContent = `${result.split("").reverse().join("")}`;
        }
        else {
            sIndex = index % 2;
            result += String(sIndex);
            index = Math.floor(index / 2);
            topclangtwo();
        }
    }
}

let func = topclang();

numberInput.addEventListener('change', function () {
    if (numberInput.value == '') {
        resultText.textContent = '';
    }
    else {
        func = topclang(numberInput.value);
        func();
    }
});




