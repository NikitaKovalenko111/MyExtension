const numberInput = document.querySelector('.number-input');
const resultText = document.querySelector('.result');
const settingsButton = document.querySelector('.settings-button');
const submitButton = document.querySelector('.submit');
const darkthemeCheckbox = document.querySelector('#dark-theme');

function darkTheme() {
    localStorage.setItem('dark-theme', true);
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('h1').style.color = 'white';
    document.querySelector('label').style.color = 'white';
     document.querySelectorAll('button').forEach(function(item) {
        item.style.background = "white";
        item.style.color = "black";
    });
    document.querySelectorAll("p").forEach(function(item) {
        item.style.color = 'white';
    });
}

if (localStorage.getItem('dark-theme') == 'true') {
    darkTheme();
}

if (settingsButton) {
    settingsButton.addEventListener('click', function() {
        document.location.href = '/assets/settings.html';
    });
};

if (submitButton) {
    submitButton.addEventListener('click', function() {
        if (darkthemeCheckbox) {
            if (darkthemeCheckbox.checked) {
                darkTheme(); 
            }
        }
        document.location.href = '/assets/index.html';
    });
};

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




