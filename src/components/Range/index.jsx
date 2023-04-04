
export const Range = ({setState, state}) => {
  let {values} = state;
    const handleSliderClick = (e) => {
      const rect = e.target.getBoundingClientRect();
      const sliderWidth = 500;
      const percentage = ((e.pageX - rect.left) / sliderWidth) * 100;
      
      values[0] < percentage
       ? 
       setState({...state, values: [percentage, values[1]]})
       : setState({...state, values: [values[0], percentage]})
      
    };
  
    return (
      <div className="wrapper">
        <div className="slider" onClick={handleSliderClick}>
          <div 
            className="slider-range" 
            style={{left: `${values[0] > values[1] ? values[1] : values[0] }%`, 
            width: `${values[0] > values[1] ? values[0] - values[1] : values[1] - values[0]}%`}}>
          </div>
          <span
            className="slider-handle" 
            tabIndex="0" 
            style={{left: `${values[0]}%`}} 
            onMouseDown={e => e.preventDefault()}>
          </span>
          <span 
            className="slider-handle" 
            tabIndex="0" 
            style={{left: `${values[1]}%`}} 
            onMouseDown={e => e.preventDefault()}>
          </span>
        </div>
      </div>
    );
  };
  