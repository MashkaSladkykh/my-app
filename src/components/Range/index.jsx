export const Range = ({setState, state}) => {
  let {values, min, max, step, right, left} = state;

  const handleChange = e => {
  if (values[0] < values[1]) {
    if(e.target.className === "range-min") {
      values[0] = parseInt(e.target.value);
      left = ((values[0] / max) * 100);
      right = 100 - (values[1] / max) * 100;
    } else {
      values[1] = parseInt(e.target.value);
      right = 100 - (values[1] / max) * 100;
      left = ((values[0] / max) * 100)
  }} else { 
    if(e.target.className === "range-min") {
      values[0] = parseInt(e.target.value);
      right = 100 - (values[0] / max) * 100;
      left = ((values[1] / max) * 100);
    } else {
      values[1] = parseInt(e.target.value);
      left = ((values[1] / max) * 100)
      right = 100 - (values[0] / max) * 100;
    }
  }
  setState({
    ...state, 
    values,
    right,
    left  
  })
  };

  const handleClick = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const range = max - min;
    const newValue = Math.round(clickPosition / rect.width * range);

    if(Math.abs(values[0] - newValue) < Math.abs(values[1] - newValue)) {
      values[0] = newValue;
      left = ((values[0] / max) * 100);
      right =  100 - (values[1] / max) * 100;
    } else { 
      values[1] = newValue;
      right = 100 - (values[1] / max) * 100;
    }
    if(values[0] > values[1]) {
      right = 100 - (values[0] / max) * 100;
      left = ((values[1] / max) * 100);
    }

    if(values[0] < min) {
      values[0]=min;
      left = min;
    } else if(values[1] < min) {
      values[1] = min;
      left = min;
    } else if(values[0] > max) {
      values[0] = max;
      right = max-max;
    } else if(values[1] > max) {
      values[1] = max;
      right = max-max;
    }

    console.log(values)
    setState({
      ...state, 
      values,
      left, 
      right
    })

  }

  return (
    <div className="wrapper" onClick={handleClick}>
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
        <output className="min" style={{left:`${values[0] - 1}%`}}>{values[0]}</output>
        <input 
          type="range" 
          className="range-max" 
          min={min} 
          max={max}  
          value={values[1]} 
          step={step} 
          onChange={e => handleChange(e)}
        />
        <output className="max" style={{left:`${values[1] - 1}%`}}>{values[1]}</output>
      </div>
    </div>
  );
};
