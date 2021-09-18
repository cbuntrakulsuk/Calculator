
//variables
let num1;
let num2;
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
            addNums(num1,num2);
            break;
        case y:
          // code block
          break;
        default:
          // code block
      }
    screen.innerHTML = addNums(num1,num2);  
}

function clearAll() {
    screen.innerHTML = "";
    num1 = 0;
    num2 = 0;
}

function delLastNum() {
    screen.innerHTML = screen.innerHTML.slice(0,-1);
}

function addNums(num1, num2) {
    num1 = parseInt(num1,10);
    num2 = parseInt(num2,10);
    return num1 + num2;
}

