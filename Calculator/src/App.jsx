import React, { useState } from 'react';
import './App.css';
import './new.json';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [average, setAverage] = useState(null);

  const handlePrime = () => {
    return setNumbers([3,5,7,11])
  };

  const handleEven = () => {
   return setNumbers([2,4,6,8,10])
  };
  const handleAverage = () => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / numbers.length;
    setAverage(avg);
  };


  const handleFibonacci = () => {
    return setNumbers([3,5,8,13,21,34])
  };
  const handleClear = () =>{
    setNumbers([]);
    setAverage(null);
  }
  
  const handleAddNumber = () => {
    const number = inputValue;
    if (!isNaN(number)) {
      setNumbers([...numbers, number]);
      setInputValue('');
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>
        <input
          type="number"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
        <button onClick={handleAddNumber}>Add</button>
        <button onClick={handlePrime}>p</button>
        <button onClick={handleEven} >
          e
        </button>
        <button onClick={handleFibonacci} >
          f
        </button>
        <button onClick={handleAverage}  disabled={numbers.length==0}  >
          Average
        </button>
        <button onClick={handleClear} disabled={numbers.length==0} >
          c
        </button>
        <div>
          <h2>Numbers: {numbers.join(', ')}</h2>
          {average !== null  && <h2>Average: {average}</h2>}
        </div>
      </header>
    </div>
    
  );
}

export default App;