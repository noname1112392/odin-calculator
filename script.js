
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