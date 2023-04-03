import {useState } from 'react';
import './App.css';
import { Range } from './components/Range';

function App() {
  const [state, setState] = useState({
    range: true,
    min: 0,
    max: 100,
    step: 1,
    values: [45, 75],
    value: 0,
  });

  let {min, max, values, value} = state;

  return (
    <div className="App">
      <Range
       setState={setState}
       min={min}
       max={max}
       values={values}
       value={value}
      />
    </div>
  );
}

export default App;
