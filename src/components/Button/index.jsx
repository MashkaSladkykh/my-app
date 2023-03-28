import { useState } from 'react';
import './styles.css';

export const Button = () => {
    const [buttons, setButtons] = useState([0]);
    const [counter, setCounter] = useState(1);
      
    const handleClick = () => {
        setCounter(counter => counter + 1);
        setButtons([...buttons, counter]);
    }   

    return (
        <div>
            {buttons.map(el =><button type={'button'} key={el} onClick={handleClick}>Click me</button>)}
        </div>
    )

}