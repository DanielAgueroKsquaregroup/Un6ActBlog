import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

function SinglePost(){
    const params = useParams();
    const [singlePost, setSinglePost] = useState([]);

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(res =>
            setSinglePost(res.data)
            )
        .catch(error => console.log(error)
        );
    }, []);

    return(
        <div key={params.id} className="full-height blue container">
            <div className="post-info single-post">
                <h1 className="blue">{singlePost.title}</h1>
                <p>{singlePost.body}</p>
                <NavLink to="/posts" className="link" >Go back to the Posts Page</NavLink>
            </div>
        </div>
    );
}

export default SinglePost;