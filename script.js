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
const topDisplay = document.querySelector('.body-top-display');

//get value of each button:
// Select all elements with class "buttons"
let buttons = document.querySelectorAll('.buttons');

// Attach a click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    let buttonId = this.id;
    switch (buttonId) {
        case 'zero':
            topDisplay.textContent = '0';
            return 0;
    }
  });
});
