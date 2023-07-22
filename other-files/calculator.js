let currentNumber = "";
let firstNumber = null;
let operator = null;
let displayValue = document.getElementById('display');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    displayValue.value = "Error: Division by zero!";
    return null;
  }
  return a / b;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return null;
  }
}

function clear() {
  currentNumber = "";
  firstNumber = null;
  operator = null;
  displayValue.value = "";
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
  }

function handleNumberClick(number) {
  currentNumber += number;
  updateDisplay();
}

function handleOperatorClick(clickedOperator) {
  if (operator && firstNumber !== null) {
    const result = operate(operator, firstNumber, parseFloat(currentNumber));
    if (result !== null) {
      currentNumber = result.toString();
      firstNumber = result;
      operator = clickedOperator;
    }
  } else {
    firstNumber = parseFloat(currentNumber);
    operator = clickedOperator;
  }
  currentNumber = "";
  updateDisplay();
}
    
      function handleEqualsClick() {
        if (operator && firstNumber !== null) {
          const result = operate(operator, firstNumber, parseFloat(currentNumber));
          if (result !== null) {
            currentNumber = result.toString();
            firstNumber = null;
            operator = null;
            updateDisplay();
          }
        }
      }
    
      function handleDecimalClick() {
        if (!currentNumber.includes('.')) {
          currentNumber += '.';
          updateDisplay();
        }
      }
    
      function handleBackspaceClick() {
        currentNumber = currentNumber.slice(0, -1);
        updateDisplay();
      }

      
    
      // Add event listeners to number and operator buttons
    //   document.querySelectorAll('.number').forEach(button => {
    //     button.addEventListener('click', () => {
    //       handleNumberClick(button.textContent);
    //     });
    //   });

      
    
    //   document.querySelectorAll('.operator').forEach(button => {
    //     button.addEventListener('click', () => {
    //       handleOperatorClick(button.textContent);
    //     });
    //   });

      const buttons = document.querySelectorAll('.number, .operator');
        buttons.forEach(button => {
        button.addEventListener('click', () => {
        display.value += button.textContent;
        });
    });


    
      document.getElementById('calculator').addEventListener('click', handleEqualsClick);
    
      document.getElementById('clear').addEventListener('click', clear);
    
      document.getElementById('decimal').addEventListener('click', handleDecimalClick);
    
    //   document.getElementById('backspace').addEventListener('click', handleBackspaceClick);
