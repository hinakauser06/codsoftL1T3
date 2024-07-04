let currOperand = ''
let prevOperand = ''
let operator = null


const prevValue = document.getElementById('prevOperand');
const currValue = document.getElementById('currOperand');

const output = document.getElementById('output')
// for input value
function number(num){
    currOperand += num
    updateOutput()
}
// for output
function updateOutput(){
    currValue.value = currOperand;
    prevValue.innerText = operator ? `${prevOperand} ${operator}` : '';
}

// for operator
function selectOperator(op){
    if(currOperand === ''){
        return
    }
    if(prevOperand !== ''){
        calculate()
    }
    operator = op
    prevOperand = currOperand
    currOperand = ''
    updateOutput()
}
// for calculation
function calculate(){
    let computation 
    const prev = parseFloat(prevOperand);
    const current = parseFloat(currOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currOperand = computation.toString();
    operator = null;
    prevOperand = '';
    updateOutput();
}
// for percentage and square
function calculatePercentage() {
    if (currOperand === '') return;
    currOperand = (parseFloat(currOperand) / 100).toString();
    updateOutput();
}

function calculateSquare() {
    if (currOperand === '') return;
    currOperand = (parseFloat(currOperand) ** 2).toString();
    updateOutput();
}
// for clear
function clearOutput(){
    currOperand = ''
    prevOperand = ''
    operator = null
    updateOutput()
}

function deleteLast() {
    currOperand = currOperand.slice(0, -1);
    updateOutput();
}
