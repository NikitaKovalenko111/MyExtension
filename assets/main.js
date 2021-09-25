const numberInput = document.querySelector('.number-input');
const resultText = document.querySelector('.result');
const settingsButton = document.querySelector('.settings-button');
const submitButton = document.querySelector('.submit');
const darkthemeCheckbox = document.querySelector('#dark-theme');
const removeauthorCheckbox = document.querySelector("#remove-author");
const author = document.querySelector("#author");

if (localStorage.getItem('dark-theme') == 'true') {
    darkTheme();
}
if (localStorage.getItem('author') == 'false') {
    author.style.display = "none";
}

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

function darkTheme() {
    localStorage.setItem('dark-theme', true);
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.border = 'solid 1px white';
    document.querySelector('body').style.padding = '15px';
    document.querySelectorAll('h1').forEach(function(item) {
        item.style.color = 'white';
    });
    document.querySelectorAll('label').forEach(function(item) {
        item.style.color = 'white';
    });
     document.querySelectorAll('button').forEach(function(item) {
        item.style.background = "white";
        item.style.color = "black";
        item.onmouseenter = function() {
            item.style.cursor = 'pointer';
            item.style.backgroundColor = "tomato";
        }
        item.onmouseleave = function() {
            item.style.backgroundColor = "white";
        }
    });
    document.querySelectorAll("p").forEach(function(item) {
        item.style.color = 'white';
    });
}

function lightTheme() {
    localStorage.removeItem('dark-theme');
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.border = 'none';
    document.querySelector('body').style.padding = '0';
    document.querySelectorAll('h1').forEach(function(item) {
        item.style.color = 'black';
    });
    document.querySelectorAll('label').forEach(function(item) {
        item.style.color = 'black';
    });
     document.querySelectorAll('button').forEach(function(item) {
        item.style.background = "white";
        item.style.color = "black";
        item.onmouseenter = function() {
            item.style.cursor = 'pointer';
            item.style.backgroundColor = "tomato";
        }
        item.onmouseleave = function() {
            item.style.backgroundColor = "white";
        }
    });
    document.querySelectorAll("p").forEach(function(item) {
        item.style.color = 'black';
    });
}

if (settingsButton) {
    settingsButton.addEventListener('click', function() {
        document.location.href = '/assets/settings.html';
    });
};