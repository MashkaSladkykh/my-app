import { generateId } from "../../utils";
import './styles.css';

export const Gap = ({setBoxes, id}) => {
    const newBox = [
        {type:'gap', id:generateId(),},
        {type:'box', id:generateId(), value:''}
    ];
    const addNew = (id) => {
        setBoxes(boxes => {
            boxes.splice(id, 0, ...newBox)
            return [...boxes]
        })
    }

    return (
        <div 
        onClick={()=>addNew(id)} 
        className='gap'></div>
    )
}