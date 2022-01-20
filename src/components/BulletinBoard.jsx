import React from 'react';
import ReactPosts from './ReactPosts';

const BulletinBoard = () => {

    let questionArray = [
        {
          question: 'Vad är tre fördelar med att använda React?',
          answers: ['1. Man kan återanvända komponenter', '2. React är mer dynamiskt med tanke på den virtuella DOMen och när sidan laddats in kan man byta mellan komponenter mycket snabbare', '3. Det har använts länge och det finns stora communities där man kan hitta hjälp']
        },
        {
          question: 'Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?',
          answers: ['Samma som svar 2 på föregående fråga: React är mer dynamiskt med tanke på den virtuella DOMen och när sidan laddats in kan man byta mellan komponenter mycket snabbare ']
        },
        {
          question: 'Nämn tre skillnader mellan React och Angular.',
          answers: ['1. React utgår från state medans Angular kan använda dependency injection (kostruktor) där vissa värden krävs',
        '2. React ändrar i den virtuella DOMen medan Angular ändrar i den "riktiga" DOMen', '3. Angular använder sig av mvc (model view controller)']
        }
      ];

    return (
    <div>
        <h1>Bulletin Board</h1>
        <ul>
        {questionArray.map(({ question, answers }, i) => (
         <ReactPosts question={question} answers={answers} key={i} />
        ))}
        </ul>
    </div>

    )
}

export default BulletinBoard;