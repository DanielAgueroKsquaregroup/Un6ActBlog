import React from "react";
import {NavLink} from 'react-router-dom'

function Posts(props){
    const {userId, id, title} = props;
    const url = `/post/${id}`;
    /* useEffect(
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
    ); */
    
    return(
        <div key={id} className="post-info">
            <p>{title}</p>
            <NavLink to={url} className="link">Visit the post</NavLink>
        </div>
    );
}

export default Posts;