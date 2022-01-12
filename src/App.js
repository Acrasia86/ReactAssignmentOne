import './App.css';
import React from 'react';
import BulletinBoard from './components/BulletinBoard';

function App() {

  let questionArray = [
    {
      question: 'Vad är tre fördelar med att använda React?',
      answer: 'bla'
    },
    {
      question: 'Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?',
      answer: 'blabla'
    },
    {
      question: 'Nämn tre skillnader mellan React och Angular.',
      answer: 'blablabla'
    }
  ];

  return (
    <div className="App">
     <BulletinBoard questions={questionArray}/>
    </div>
  );
}

export default App;
