import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import { NavLink, useSearchParams } from "react-router-dom";

function FetchingData(){
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    
    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
        .then(res => {
            setPosts(res.data);
            setPage(page)
        })
        .catch(error => 
            console.log(error));
    }, [page]);

    const handleOnNext = () => {
        setPage(page + 1);
    }

    const handleOnPrevious = () => {
        setPage(page-1);
    }

    const handleOnLogout = () => {
        localStorage.clear();
        window.location.pathname = '/'
    }
    
    return(
        <div className="container posts-container">
            
            { posts.map(post =>  (
                <Posts
                    userId={post.userId}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                />
                ))}

            <NavLink to="/posts" onClick={handleOnPrevious}  className="link">Previous</NavLink>
            <NavLink to="/posts" onClick={handleOnNext}  className="link">Next</NavLink>
            <button className="link" onClick={handleOnLogout}>Logout</button>

        </div>
    );
}

export default FetchingData;