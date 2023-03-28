import { useState} from "react";

export const Form =()=>{
    const data = ['Chrome', 'Safari', 'Firefox', 'Shit yandex', 'Chromium', 'Opera'];
    const [value, setValue] = useState('');
    const [active, setActive] = useState(false);

    const handleChange = (e) => {
        const str = e.target.value;
        setValue(str);
    };

    return(
        <div className="container">
            <div className="input-container">
                <input 
                placeholder="Your browser is..." 
                className="input" 
                onChange={(e)=>handleChange(e)}
                value={value}
                onFocus={()=> setActive(true)} 
                onBlur={e =>{
                    e.relatedTarget && setValue(e.relatedTarget.innerHTML) 
                    setActive(false)
                }}         
                />
                {active ? <ul className='list active'>
                    {data.filter(el => value ? el.toLowerCase().startsWith(value.toLowerCase()) : el)
                    .map(browser => 
                      <li className="list-item" onClick={()=>{setValue(browser);}} key={browser} tabIndex={1}>{browser}</li>)}
                </ul> : null}
            </div>
            <button type="button" onClick={()=>alert(value)}>Submit</button>
        </div>
    )
};