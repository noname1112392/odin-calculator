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

/*Create variables*/
const topDisplay = document.querySelector('.top-display');
let valuesArr = [];
const operationArr = new Array(3);

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
                valuesArr.push(0);
                break;
            case 'one':
                topDisplay.textContent = '1';
                valuesArr.push(1);
                break;
            case 'two':
                topDisplay.textContent = '2';
                valuesArr.push(2);
                break;
            case 'three':
                topDisplay.textContent = '3';
                valuesArr.push(3);
                break;
            case 'four':
                topDisplay.textContent = '4';
                valuesArr.push(4);
                break;
            case 'five':
                topDisplay.textContent = '5';
                valuesArr.push(5);
                break;
            case 'six':
                topDisplay.textContent = '6';
                valuesArr.push(6);
                break;
            case 'seven':
                topDisplay.textContent = '7';
                valuesArr.push(7);
                break;
            case 'eight':
                topDisplay.textContent = '8';
                valuesArr.push(8);
                break;
            case 'nine':
                topDisplay.textContent = '9';
                valuesArr.push(9);
                break;
            case 'add':
                topDisplay.textContent = '+';
                valuesArr.push('+');
                break;
            case 'substract':
                topDisplay.textContent = '-';
                valuesArr.push('-');
                break;
            case 'multiply':
                topDisplay.textContent = 'x';
                valuesArr.push('x');
                break;
            case 'division':
                topDisplay.textContent = '/';
                valuesArr.push('/');
                break;
            case 'equal':
                performCal(valuesArr);
                break;
            case 'delete':
                topDisplay.textContent = 'del';
                return 'del';
            case 'decimal':
                topDisplay.textContent = '.';
                valuesArr.push('.');
                break;
        }
    });
});

function performCal(arr) {
    let operatorRegex = /[+\-x/]/;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (operatorRegex.test(arr[i])) {
            index = i;
        }
    }
    let operator = arr[index];
    console.log(operator);
    console.log(arr);
    let joinArr = arr.join('');
    console.log(joinArr);
    let arrWithNumb = joinArr.split(operatorRegex);
    console.log(arrWithNumb);
    let firstNumb = parseInt(arrWithNumb[0]);
    let secondNumb = parseInt(arrWithNumb[1]);
    console.log(firstNumb);
    console.log(secondNumb);
    operate(firstNumb, secondNumb, operator);

    arr.splice(0, arr.length);
    console.log(arr);
}
