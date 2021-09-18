
//variables
let num1 = 0;
let num2 = 0;
let result = 0;
let operation;

//Selectors
const button = document.querySelectorAll('.calc__button');
const screen = document.querySelector('.calc__screen');
const clear = document.querySelector('#clear');
const del = document.querySelector('#del');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

//Event Listeners
button.forEach(button => button.addEventListener('click', displayOnScreen));
operator.forEach(operator => operator.addEventListener('click', getFirstNum));
clear.addEventListener('click', clearAll);
del.addEventListener('click', delLastNum);
equals.addEventListener('click', calculate);

//Fuctions
function displayOnScreen(e) {
    if (e.target.innerHTML != 'C') {
        screen.innerHTML += e.target.innerHTML;
    }
}

function getFirstNum(e){
    num1 = screen.innerHTML.slice(0,-1);
    screen.innerHTML = "";
    operation = e.target.innerHTML;
}

function calculate() {
    num2 = screen.innerHTML.slice(0,-1);
    screen.innerHTML = "";

    switch(operation) {
        case '+':
            result = addNums(num1,num2);
            break;
        case '-':
            result = subNums(num1,num2);
            break;
        case 'x':
            result = multiplyNums(num1,num2);
            break;
        case '/':
            result = divideNums(num1,num2);
            break;
      }
    screen.innerHTML = result;  
}

function clearAll() {
    screen.innerHTML = "";
    num1 = 0;
    num2 = 0;
    result = 0;
}

function delLastNum() {
    screen.innerHTML = screen.innerHTML.slice(0,-1);
}

function addNums(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    return num1 + num2;
}

function subNums(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 - num2;
}

function multiplyNums(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 * num2;
}

function divideNums(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1 / num2;
}
