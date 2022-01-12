import { useState, useEffect } from "react";
import PostLiked from "./PostLiked";
import "../components/reactP.css"


const ReactPosts = (question) => {
    const [likePost, setLikedPost] = useState(false);

    return(
        <div>
        <li>{question.question}</li>
        <li>{question.answer}</li>
        <button onClick={(e) => {
            setLikedPost(!likePost)
            console.log(e.target.style.display = 'none');
            e.target.style.display = 'none';
    }}
    
      >  Gilla
      </button>
      {likePost && <PostLiked/>}
        </div>
    )
}

export default ReactPosts;