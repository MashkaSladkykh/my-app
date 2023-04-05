import {useState } from 'react';
import './App.css';
import { Range } from './components/Range';

function App() {
  const [state, setState] = useState({
    range: true,
    min: 0,
    max: 100,
    step: 1,
    values: [25, 75],
    value: 0,
    left:25,
    right:25,
  });

  return (
    <div className="App">
      <Range
       setState={setState}
       state={state}
      />
    </div>
  );
}

export default App;
