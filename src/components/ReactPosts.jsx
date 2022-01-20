import { useState, useEffect } from "react";
import PostLiked from "./PostLiked";
import "../components/reactP.css"


const ReactPosts = ({question, answers}) => {
    const [likePost, setLikedPost] = useState(false);
    console.log(question.answers);
    return(
        <div>
            <div className="question-card">
        <li style={{fontWeight: 'bold'}}>{question}</li>
        {answers.map(( qu, i) => (
         <li key={i}>{qu}</li>
        ))}
      
        <button className="btn btn-success" onClick={(e) => {
            setLikedPost(!likePost)
            console.log(e.target.style.display = 'none');
            e.target.style.display = 'none';
    }}
    
      >  Gilla
      </button>
    
      {likePost && <PostLiked/>}
      </div>
        </div>
    )
}

export default ReactPosts;