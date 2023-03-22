import { useState } from "react";

export const Form =()=>{
    const data = ['Chrome', 'Safari', 'Firefox', 'Shit yandex', 'Chromium', 'Opera'];
    const [value, setValue] = useState('lol');  

    return(
        <form>
            <input placeholder="Your browser is..." list="browsers" onChange={(e)=>setValue(e.target.value)}/>
            <datalist id="browsers">
                {data.map(browser => <option value={browser} key={browser}></option>)}
            </datalist>
            <button type="submit" onClick={(e)=> {e.preventDefault(); alert(value)}}>Submit</button>
        </form>
    )
};