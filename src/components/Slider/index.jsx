import { Square } from "./Square";
import { useState, useEffect, useLayoutEffect } from "react";

export const Squares = () => {
  const [activeId, setActiveId] = useState(1);
  const [data, setData] = useState([
    {
        id:0,
        className:'square red',
        isActive:false,
    },
    {
        id:1,
        className:'square black',
        isActive:false,
    },
    {
        id:2,
        className:'square blue',
        isActive:false,
    },
    {
        id:3,
        className:'square purple',
        isActive:false,
    }
  ]);
  useEffect(()=>{
    data.sort((a,b)=>a.id-b.id)
  },[])

  useLayoutEffect(()=>{
    data.unshift(data.pop());
    console.log(data)
  },[activeId, data]);

  useLayoutEffect(() => { 
  const lastIndex = data.length - 1;
  if (activeId > lastIndex){
    setActiveId(0)
  } 
  console.log(activeId)
  }, [activeId, data]);    
  
  return(
      <div className="squares">
          {data.map(({className, id}) => (
              <Square 
                key={id}
                isActive={activeId === id}
                className={className}
                onClick={()=>setActiveId(id)}
              />
          ))}
    </div>
  )
}