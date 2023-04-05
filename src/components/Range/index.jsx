
export const Range = ({setState, state}) => {
  let {values, min, max, step, value, right, left} = state;

  const handleChange = e => {
    const res = values[1] - values[0];
    value = e.target.value;
    
    if(res < step){
      if(e.target.className === "range-min"){
        values[0] = values[1] - step;
      }
      else{
        values[1] = values[0] + step;
      }
    } else{
      if(e.target.className === "range-min") {
        values[0] = parseInt(value);
        left = ((values[0] / max) * 100);
      } else {
        values[1] = parseInt(value);
        right = 100 - (values[1] / max) * 100;
      }
    }
    setState({
      ...state, 
      value, 
      values,
      right,
      left  
    })
  }

  
  return (
    <div className="wrapper">
      <div className="slider">
        <div className="progress" style={{left:`${left}%`, right:`${right}%`}}></div>
      </div>
      <div className="range-input">
        <input 
          type="range" 
          className="range-min" 
          min={min} 
          max={max} 
          value={values[0]} 
          step={step}  
          onChange={e => handleChange(e)}
        />
        <input 
          type="range" 
          className="range-max" 
          min={min} 
          max={max}  
          value={values[1]} 
          step={step} 
          onChange={e => handleChange(e)}
        />
      </div>
    </div>
  );
};
