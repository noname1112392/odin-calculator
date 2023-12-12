//Create math operators:
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

//Operate function where it will call one of the above 
//function to do the job when users input the operators and 2 numbers
function operate(numbA, numbB, operator) {
    switch (operator) {
        case '+':
            console.log(add(numbA, numbB));
            break;
        case '-':
            console.log(substract(numbA, numbB));
            break;
        case 'x':
            console.log(multiply(numbA, numbB));
            break;
        case '/':
            console.log(division(numbA, numbB));
            break;
    }
}

/*Create eventlistener for each buttons*/
// const numbZero = document.getElementById('zero');
// const numbOne = document.getElementById('one');
// const numbTwo = document.getElementById('two');
// const numbThree = document.getElementById('three');
// const numbFour = document.getElementById('four');
// const numbFive = document.getElementById('five');
// const numbSix = document.getElementById('six');
// const numbSeven = document.getElementById('seven');
// const numbEight = document.getElementById('eight');
// const numbNine = document.getElementById('nine');
// const addBttn = document.getElementById('add');
// const substractBttn = document.getElementById('substract');
// const multBttn = document.getElementById('multiply');
// const divisionBttn = document.getElementById('division');
// const equalBttn = document.getElementById('equal');
// const delBttn = document.getElementById('delete');
// const decimalBttn = document.getElementById('decimal');
const topDisplay = document.querySelector('.top-display');

//get value of each button:
// Select all elements with class "buttons"
let buttons = document.querySelectorAll('.buttons');

// Attach a click event listener to each button
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        let buttonId = this.id;
        switch (buttonId) {
            case 'zero':
                topDisplay.textContent = '0';
                return 0;
            case 'one':
                topDisplay.textContent = '1';
                return 1;
            case 'two':
                topDisplay.textContent = '2';
                return 2;
            case 'three':
                topDisplay.textContent = '3';
                return 3;
            case 'four':
                topDisplay.textContent = '4';
                return 4;
            case 'five':
                topDisplay.textContent = '5';
                return 5;
            case 'six':
                topDisplay.textContent = '6';
                return 6;
            case 'seven':
                topDisplay.textContent = '7';
                return 7;
            case 'eight':
                topDisplay.textContent = '8';
                return 8;
            case 'nine':
                topDisplay.textContent = '9';
                return 9;
            case 'add':
                topDisplay.textContent = '+';
                return '+';
            case 'substract':
                topDisplay.textContent = '-';
                return '-';
            case 'multiply':
                topDisplay.textContent = 'x';
                return 'x';
            case 'division':
                topDisplay.textContent = '/';
                return '/';
            case 'equal':
                topDisplay.textContent = '=';
                return '=';
            case 'delete':
                topDisplay.textContent = 'del';
                return 'del';
            case 'decimal':
                topDisplay.textContent = '.';
                return '.';
        }
    });
});
