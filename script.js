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
            return add(numbA, numbB);
        case '-':
            return substract(numbA, numbB);
        case 'x':
            return multiply(numbA, numbB);
        case '/':
            return division(numbA, numbB);
    }
}

/*Create variables*/
const topDisplay = document.querySelector('.top-display');
let valuesArr = [];
console.log(`before valueArr ${valuesArr}`);
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
                valuesArr.push(0);
                break;
            case 'one':
                valuesArr.push(1);
                break;
            case 'two':
                valuesArr.push(2);
                break;
            case 'three':
                valuesArr.push(3);
                break;
            case 'four':
                valuesArr.push(4);
                break;
            case 'five':
                valuesArr.push(5);
                break;
            case 'six':
                valuesArr.push(6);
                break;
            case 'seven':
                valuesArr.push(7);
                break;
            case 'eight':
                valuesArr.push(8);
                break;
            case 'nine':
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
                del(valuesArr);
            case 'decimal':
                valuesArr.push('.');
                break;
        }
        topDisplay.textContent = valuesArr;
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
    console.log(`This operator is: ${operator}`);
    console.log(`Array contains ${arr}`);
    let joinArr = arr.join('');
    console.log(`this is now a string with: ${joinArr}`);
    let arrWithNumb = joinArr.split(operatorRegex);
    console.log(`This array only contains the numbs: ${arrWithNumb}`);
    let firstNumb = parseInt(arrWithNumb[0]);
    let secondNumb = parseInt(arrWithNumb[1]);
    console.log(`Get first numb from the arrWithNumb: ${firstNumb}`);
    console.log(`Get second numb from the arrWithNumb: ${secondNumb}`);
    let newNumb = operate(firstNumb, secondNumb, operator);
    valuesArr.splice(0, valuesArr.length, newNumb);
    console.log(`new ValuesArr ${valuesArr}`);
}

function del(arr) {
    let joinArr = arr.splice(0, arr.length);
    console.log(joinArr);
    return joinArr;
}

function display(arr) {
    
}