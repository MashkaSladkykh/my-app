import './styles.css';

export const Box = ({value, setBoxes, id}) => {
    const setValues = e => {
        setBoxes(boxes=>{
            boxes[id].value = e.target.value[e.target.value.length-1];
            e.target.value = e.target.value[e.target.value.length-1]
            return [...boxes]
        })
    }

    return (
        <input className="box" id={id} defaultValue={value} onChange={e=> setValues(e)}/>
    )

}