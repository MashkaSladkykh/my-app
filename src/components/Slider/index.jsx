import { Square } from "./Square";
import {data} from'./data';
import { useState } from "react";

export const Squares = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  console.log(data);

  const getPrevSquare = (activeIndex) => {
    if (activeIndex === 0) {
      return data.length - 1;
    }
    return activeIndex - 1;
  };
  const getNextSquare = (activeIndex) => {
    if (activeIndex === data.length - 1) {
      return 0;
    }
    return activeIndex + 1;
  };

  const goPrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(data.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };
  const goNext = () => {
    if (activeIndex === data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className='squares'>
      <Square
        className={data[getPrevSquare(activeIndex)].className}
        onClick={goPrev}
      />

      <Square className={`${data[activeIndex].className} active`} />

      <Square
        className={data[getNextSquare(activeIndex)].className}
        onClick={goNext}
      />
    </div>
  );
};