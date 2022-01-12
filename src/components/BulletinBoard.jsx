import React from 'react';
import ReactPosts from './ReactPosts';

const BulletinBoard = ({questions}) => {
    return (
    <div>
        <h1>Bulletin Board</h1>
        <ul>
        {questions.map(({ question, answer}, i) => (
         <ReactPosts question={question} answer={answer} key={i} />
        ))}
        </ul>
    </div>

    )
}

export default BulletinBoard;