import { useEffect, useState } from "react";
import './style.css';
import { Posts } from "./Posts";
import { PaginationComponent } from "./PaginationComponent";
import { Select } from "./Select";
import { Next } from "./PaginationComponent/Next";
import { Prev } from "./PaginationComponent/Prev";

export const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);

    const nextPage = ()=> setCurrentPage(prev => {
        if((posts.length/postsPerPage) === prev) {
            setNextDisabled(false)
            return prev
        } else if((posts.length/postsPerPage) === prev + 1) {
            setNextDisabled(true)
            return prev + 1
        } 
        else { 
            setNextDisabled(false)
            return prev + 1
        }
    });

    const prevPage = () =>  setCurrentPage(prev => {
        if(prev > 2) {
            setPrevDisabled(false)
            return prev - 1
        }      
        else if( prev === 2) {
            setPrevDisabled(true)
            return prev -1
        }
    });

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));

        if(currentPage === 1) {
            setPrevDisabled(true)
        }; 
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
    const paginate = pageNumber => {setCurrentPage(pageNumber); pageNumber > 1 ? setPrevDisabled(false) : setPrevDisabled(true)};

    return(
        <>
            <Posts 
                posts={currentPosts}
            />
            <div className="pagination-wrap">
                <Prev onClick={()=>{prevPage(); setNextDisabled(false)}} disabled={prevDisabled} />
                <PaginationComponent 
                    postsPerPage={postsPerPage} 
                    totalPosts={posts.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <Next onClick={()=>{nextPage(); setPrevDisabled(false)}} disabled={nextDisabled}/>
                <Select setPostsPerPage={setPostsPerPage}/>
            </div>
        </>
    )
}