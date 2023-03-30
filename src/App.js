import { useState } from 'react';
import './App.css';
import { Box } from './components/Boxes';
import {Gap} from './components/Boxes/Gap';
import { generateId } from './components/utils';

function App() {
  const [boxes, setBoxes] = useState([
    {type:'box', id:generateId(), value:'a'},
    {type:'gap', id:generateId(),},
    {type:'box', id:generateId(), value:'b'},
    {type:'gap', id:generateId(),},
    {type:'box', id:generateId(), value:'c'},
  ]);
  console.log(boxes)

  return (
    <>
      <div className="App">
        {boxes.map((el, i) => el.type ==='box' ? <Box key={el.id} value={el.value} setBoxes={setBoxes} id={i}/> : <Gap setBoxes={setBoxes} key={el.id} id={i}/>)}
      </div>
      <p>{boxes.map(el => el.value)}</p>
    </>
  );
}

export default App;
