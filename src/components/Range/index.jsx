
export const Range = ({setState, min, max, values, value}) => {

    const handleSliderClick = (e) => {
      const rect = e.target.getBoundingClientRect();
      console.log(rect,'rect')
      const clickX = e.pageX - window.scrollX;
      console.log(clickX,'clickX')
      const sliderX = rect.left;
      const sliderWidth = rect.width;
      const percentage = ((clickX - sliderX) / sliderWidth) * 100;
      setState({values: [percentage, values[1]]});
    };
  
    return (
      <div className="wrapper">
        <div className="ui-slider" onClick={handleSliderClick}>
          <div className="ui-slider-range" style={{left: `${values[0] > values[1] ? values[1] : values[0] }%`, width: `${values[0] > values[1] ? values[0] - values[1] : values[1] - values[0]}%`}}></div>
          <span className="ui-slider-handle" tabIndex="0" style={{left: `${values[0]}%`}} onMouseDown={e => e.preventDefault()}></span>
          <span className="ui-slider-handle" tabIndex="0" style={{left: `${values[1]}%`}} onMouseDown={e => e.preventDefault()}></span>
        </div>
      </div>
    );
  };
  