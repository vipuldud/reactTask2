import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleNumberClick = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setPreviousValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqualClick = () => {
    const currentValue = parseFloat(displayValue);
    const previous = parseFloat(previousValue);

    let result;
    switch (operator) {
      case '+':
        result = previous + currentValue;
        break;
      case '-':
        result = previous - currentValue;
        break;
      case '*':
        result = previous * currentValue;
        break;
      case '/':
        result = previous / currentValue;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setOperator(null);
    setPreviousValue(null);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setOperator(null);
    setPreviousValue(null);
  };

  return (
    <div class="cal">
      <h1>React Task-2</h1>
      <h2>Simple Calculator</h2>
    <div className="calculator">
      <div className="display">
        <div className="calculation">
          {previousValue} {operator}
        </div>
        <div className="result">{displayValue}</div>
      </div>
      <div className="keypad">
        <div className="row">
          <button className="number" onClick={() => handleNumberClick('7')}>
            7
          </button>
          <button className="number" onClick={() => handleNumberClick('8')}>
            8
          </button>
          <button className="number" onClick={() => handleNumberClick('9')}>
            9
          </button>
          <button
            className="operator"
            onClick={() => handleOperatorClick('/')}
          >
            /
          </button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleNumberClick('4')}>
            4
          </button>
          <button className="number" onClick={() => handleNumberClick('5')}>
            5
          </button>
          <button className="number" onClick={() => handleNumberClick('6')}>
            6
          </button>
          <button
            className="operator"
            onClick={() => handleOperatorClick('*')}
          >
            *
          </button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleNumberClick('1')}>
            1
          </button>
          <button className="number" onClick={() => handleNumberClick('2')}>
            2
          </button>
          <button className="number" onClick={() => handleNumberClick('3')}>
            3
          </button>
          <button
            className="operator"
            onClick={() => handleOperatorClick('-')}
          >
            -
          </button>
        </div>
        <div className="row">
          <button className="number" onClick={() => handleNumberClick('0')}>
            0
          </button>
          <button className="number" onClick={() => handleOperatorClick('.')}>
            .
          </button>
          <button className="equal" onClick={handleEqualClick}>
            =
          </button>
          <button className="operator" onClick={() => handleOperatorClick('+')}>
            +
          </button>
        </div>
        <div className="row">
          <button className="clear" onClick={handleClearClick}>
            C
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
