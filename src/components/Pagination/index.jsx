import { useEffect, useState } from "react";
import './style.css';
import { Posts } from "./Posts";
import { PaginationComponent } from "./PaginationComponent";

export const Pagination = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
   
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

    return(
        <>
            <Posts 
                posts={currentPosts}
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