import './styles.css';

export const Box = ({value, setBoxes, id}) => {
    const setValues = e => {
        setBoxes(boxes=>{
            boxes[id].value = e.target.value;
            return [...boxes]
        })
    }

    return (
        <input className="box" id={id} maxLength={1} defaultValue={value} onChange={e=> setValues(e)}/>
    )

}