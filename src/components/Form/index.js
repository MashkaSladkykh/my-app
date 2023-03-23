import { useState, useRef } from "react";

export const Form =()=>{
    const data = ['Chrome', 'Safari', 'Firefox', 'Shit yandex', 'Chromium', 'Opera'];
    const [value, setValue] = useState(''); 
    const [result, setResult] = useState(data);
    const [active, setActive] = useState(false);
    const inputEl = useRef(null);

    const filter = value => data.filter(el => el.toLowerCase().includes(value.toLowerCase()))
    
    const handleChange = (e) => {
        const str = e.target.value;
        setValue(str);
        setResult(filter(str))
    };

    const handleActive =() => {
        setActive(!active)
    };
    const bluring = () => {
        inputEl.current.blur();
        console.log(inputEl.current.blur ? 'blur' : 'not')
    }

    return(
        <form className="container" onClick={bluring}>
            <div className="input-container">
                <input 
                placeholder="Your browser is..." 
                className="input" 
                onChange={(e)=>handleChange(e)}
                value={value}
                onFocus={handleActive}
                ref={inputEl}            
                />
                <ul className={active ? 'list active' : 'list'}>
                    {result.map(browser => 
                      <li className="list-item" onClick={()=>{setValue(browser); setResult(filter(browser))}} key={browser}> {browser}</li>)}
                </ul>
            </div>
            <button type="submit" onClick={(e)=> {e.preventDefault(); alert(value)}}>Submit</button>
        </form>
    )
};