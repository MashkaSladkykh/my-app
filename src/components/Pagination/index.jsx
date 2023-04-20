import { useEffect, useState } from "react";
import './style.css';
import { Posts } from "./Posts";
import { PaginationComponent } from "./PaginationComponent";
import { data } from "./data";

export const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [value, setValue] = useState('');
   
    useEffect(()=> {
        setPosts(data.filter(el => el.toString().startsWith(value)))
    }, [value]);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

    return(
        <>
            <Posts 
                posts={currentPosts}
                setValue={setValue}
            />
            <PaginationComponent 
                postsPerPage={postsPerPage} 
                totalPosts={posts.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setPostsPerPage={setPostsPerPage}
            />
        </>
    )
}