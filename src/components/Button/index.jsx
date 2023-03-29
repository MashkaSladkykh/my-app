import './styles.css';

const getId = ()=> Math.random()+Math.random()*Math.random();

export const Button = ({setButtons, ids, childrens, position}) => {
  const {left, top, zIndex} = position;
  const calculatePosition = () => {
    switch(childrens.className) {
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
  }



  return <div>'kek'</div>
  }