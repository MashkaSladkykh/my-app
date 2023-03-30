import { generateId } from "../../utils";
import './styles.css';

export const Gap = ({setBoxes, id}) => {
    const newBox = [
        {type:'gap', id:generateId(),},
        {type:'box', id:generateId(), value:''}
    ];
    const addNew = (id) => {
        const splice = (arr, start, deleteCount, ...addItem) => {
            const result = [];
            if (start > 0) {
                result.push(...arr.slice(0, start));
            }
            result.push(...addItem);
            const len = result.length - addItem.length;
            let count = deleteCount <= 0 ? len : len + deleteCount;
            if (arr[count]) {
                result.push(...arr.slice(count));
            }
            return result;
        };

        setBoxes(boxes => {
            return [...splice(boxes, id, 0, ...newBox)]
        })
    }

    return (
        <div 
        onClick={()=>addNew(id)} 
        className='gap'></div>
    )
}