import './styles.css';

const getId = ()=> Math.random()+Math.random()*Math.random();
const calculatePosition = ({top, left, zIndex, side}) => {
  switch(side) {
    case 'LT':
      return { 
        left: left -50,
        top:top - 25,
        zIndex: 1
    }
    case 'RT':
      return { 
        left: left + 50,
        top:top - 25,
        zIndex: 1
    };
    case 'LB':
      return { 
        left: left -50,
        top:top + 25,
        zIndex: 1
    }
    case 'RB':
      return { 
        left: left + 50,
        top:top + 25,
        zIndex: 1
    }
    default:
      return{
        left, top, zIndex
    }
  }
};

export const Button = ({setButtons, ids, childrens, position}) => {
  const {left, top, zIndex} = position;
  
  const generateChild = () => {
    
  }


  return <div>Click me</div>
  }