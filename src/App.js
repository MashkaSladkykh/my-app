import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
  const [buttons, setButtons] = useState({
    first:{
      ids:['first'],
      childrens:{},
      position: {
        left: 0,
        top: 0,
        zIndex: 0
      }
    }
  });

  return (
    <div className="App">
      <Button
        setButtons={setButtons}
        ids={buttons.first.ids}
        childrens={buttons.first.childrens}
        position={buttons.first.position}
      />
    </div>
  );
}

export default App;
