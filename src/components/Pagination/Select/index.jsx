import './style.css';

export const Select = ({setPostsPerPage}) => {

    return(
        <select name="" id="" onChange={(e)=> setPostsPerPage(e.target.value)} className="select">
            <option value="1">1/page</option>
        <option value="10">10/page</option>
        <option value="20">20/page</option>
        <option value="50">50/page</option>
        <option value="100">100/page</option>
    </select>
    )
}