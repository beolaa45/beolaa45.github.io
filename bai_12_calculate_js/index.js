let numbtn = document.getElementsByClassName('calc-btn-num');
let operator = document.getElementsByClassName('calc-btn-operator');
let displayValElement = document.getElementById('calc-display-val');
let clearValue = document.getElementById('calc-clear');
let removeNum = document.getElementById('calc-backspace');
let decimal = document.getElementById('calc-decimal');


let valueDisplay = '0';
let pendingVal;
let evalStringArray= [];



function updateDisplayVal(e) {
    console.log('ok')
  let btntext = e.target.innerText;
      console.log(btntext);
    if(valueDisplay === '0'){
      valueDisplay = '';
    }
      valueDisplay += btntext;
      console.log(valueDisplay);
      displayValElement.innerText = valueDisplay
    
}

function addOperator(e) {
    let operato = e.target.innerText;
    console.log(operato)
    switch(operato) {
        case '+':
            pendingVal = valueDisplay;
            valueDisplay = '0';
            displayValElement.innerText = valueDisplay;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+')
            break;
        case '-':
            pendingVal = valueDisplay;
            valueDisplay = '0';
            displayValElement.innerText = valueDisplay;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-')
            break;
        case 'x':
            pendingVal = valueDisplay;
            valueDisplay = '0';
            displayValElement.innerText = valueDisplay;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*')
            break;
        case '÷':
            pendingVal = valueDisplay;
            valueDisplay = '0';
            displayValElement.innerText = valueDisplay;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/')
            break;
        case '=':

            evalStringArray.push(valueDisplay);
            console.log(evalStringArray.join(' '))
            let result = eval(evalStringArray.join(' '));
            
            displayValElement.innerText = result
            break;
        case '%':
            
            valueDisplay = eval(valueDisplay + '/ 100');
            displayValElement.innerText = valueDisplay;
            pendingVal = valueDisplay.toString();
            
            
        default:
            break;
    }
}

for(let i = 0; i < numbtn.length; i++) {
    numbtn[i].addEventListener('click', updateDisplayVal)
}

for(let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', addOperator)
}

clearValue.onclick = () => {
    valueDisplay = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerText = valueDisplay
}

removeNum.onclick = () => {
    valueDisplay = valueDisplay.slice(0, valueDisplay.length - 1);
    if(valueDisplay === ''){
        valueDisplay = '0'
    }
    displayValElement.innerText = valueDisplay
}

decimal.onclick = () => {
    if(!valueDisplay.includes('.')){
        valueDisplay += '.'
    }
    displayValElement.innerText = valueDisplay
}