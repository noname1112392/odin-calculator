//Create math operation functions:
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

/*
-Create variables
-We create variable for topDisplay to display our numbers and operators
-We create an empty array to store our inputs such as numbers and operators
*/
const topDisplay = document.querySelector('.top-display');
let valuesArr = [];

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
                valuesArr.push('+');
                break;
            case 'substract':
                valuesArr.push('-');
                break;
            case 'multiply':
                valuesArr.push('x');
                break;
            case 'division':
                valuesArr.push('/');
                break;
            case 'equal':
                performCal(valuesArr);
                break;
            case 'delete':
                del(valuesArr);
            case 'decimal':
                break;
        }
        display(valuesArr);
    });
});

//This function will be called when the equal button is clicked
//It performs by getting the array and look for operators.
//It will separate the numbers out then will add those 2 parts numbers into another array
//It will then call the Operate function by plugging in 2 numbers and the operators
function performCal(arr) {
    //create variable to store +,-,x,/
    let operatorRegex = /[+\-x/]/;
    let index = 0;
    //This code is to look for index of operators
    for (let i = 0; i < arr.length; i++) {
        if (operatorRegex.test(arr[i])) {
            index = i;
        }
    }
    //Get operator
    let operator = arr[index];
    //Make a string out of the arr
    let joinArr = arr.join('');
    //Create a new arr to store only numbers
    let arrWithNumb = joinArr.split(operatorRegex);
    //Get first number and second number from the arrWithNumb
    let firstNumb = parseInt(arrWithNumb[0]);
    let secondNumb = parseInt(arrWithNumb[1]);
    let newNumb = operate(firstNumb, secondNumb, operator);
    valuesArr.splice(0, valuesArr.length, newNumb);
}

//A delete function that will be called when the delete button is clicked
function del(arr) {
    arr.length = 0;
    console.log(arr);
}

//This Display function will be called and display the numbers and operators inside the arrays
function display(arr) {
    //Make a string out of the arr
    let joinArr = arr.join(' ');
    topDisplay.innerHTML = joinArr;
}

