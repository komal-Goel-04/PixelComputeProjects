document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const numButtons = document.querySelectorAll(".num-btn");
    const opButtons = document.querySelectorAll(".op-btn");
    const actionButtons = document.querySelectorAll(".action-btn");
  
    let currentInput = "0";
    let firstOperand = null;
    let currentOperation = null;
    let justCalculated = false;
  
    function updateDisplay() {
      display.textContent = currentInput;
    }
  
    function clearAll() {
      currentInput = "0";
      firstOperand = null;
      currentOperation = null;
      justCalculated = false;
      updateDisplay();
    }
  
    function deleteLast() {
      if (justCalculated) {
        clearAll();
        return;
      }
      if (currentInput.length === 1) {
        currentInput = "0";
      } else {
        currentInput = currentInput.slice(0, -1);
      }
      updateDisplay();
    }
  
    function appendNumber(num) {
      if (justCalculated) {
        currentInput = "0";
        justCalculated = false;
      }
      if (num === "." && currentInput.includes(".")) return;
      if (currentInput === "0" && num !== ".") {
        currentInput = num;
      } else {
        currentInput += num;
      }
      updateDisplay();
    }
  
    function chooseOperation(op) {
      if (currentOperation !== null) {
        calculate();
      }
      firstOperand = parseFloat(currentInput);
      currentOperation = op;
      currentInput = "0";
    }
  
    function calculate() {
      if (currentOperation === null || firstOperand === null) return;
  
      const secondOperand = parseFloat(currentInput);
      let result;
  
      switch (currentOperation) {
        case "add":
          result = firstOperand + secondOperand;
          break;
        case "subtract":
          result = firstOperand - secondOperand;
          break;
        case "multiply":
          result = firstOperand * secondOperand;
          break;
        case "divide":
          if (secondOperand === 0) {
            alert("Error: Division by zero");
            clearAll();
            return;
          }
          result = firstOperand / secondOperand;
          break;
        case "remainder":
          result = firstOperand % secondOperand;
          break;
        case "exponent":
          result = Math.pow(firstOperand, secondOperand).toFixed(3);
          break;
        default:
          return;
      }
  
      currentInput = result.toString();
      updateDisplay();
      currentOperation = null;
      firstOperand = null;
      justCalculated = true;
    }
  

    numButtons.forEach(button => {
      button.addEventListener("click", () => {
        appendNumber(button.dataset.num);
      });
    });
  

    opButtons.forEach(button => {
      button.addEventListener("click", () => {
        chooseOperation(button.dataset.op);
      });
    });
  

    actionButtons.forEach(button => {
      const action = button.dataset.action;
      button.addEventListener("click", () => {
        switch(action) {
          case "clear":
            clearAll();
            break;
          case "delete":
            deleteLast();
            break;
          case "equals":
            calculate();
            break;
          case "remainder":
            chooseOperation("remainder");
            break;
          case "exponent":
            chooseOperation("exponent");
            break;
        }
      });
    });
  
    clearAll();
  });
  
