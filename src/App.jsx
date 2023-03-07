import React, { useState, useEffect } from 'react';
import Card from './Card';
import './App.css';

const CARD_SET = {
  title: 'Noble Price Winners',
  description: 'Gain knowledge about the noble price winners',
  cards: [
    {
      question: 'Who was the first woman to win a Nobel Prize?',
      answer: 'Marie Curie',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbyiPsCd-8Uh7PoDWPAqGxOkgiMxm0zjSFig3wYNcHRd8D1e4RX_pW5T5-nKt44GS4mo&usqp=CAU',
      color: 'lightyellow',
    },
    {
      question: 'Which Nobel Prize is not awarded in Sweden?',
      answer: 'Nobel Peace Prize',
      image: 'https://media.istockphoto.com/id/1146017341/photo/heart-shaped-earth.jpg?s=612x612&w=0&k=20&c=G2YPfteKeMG6N16yDwBtcvU_aAc4Fe5W-ORmoQdbpD4=',
      color: 'lightyellow',
    },
    {
      question: 'Which Nobel laureate is known for his theory of relativity?',
      answer: 'Albert Einstein',
      image: 'https://pbs.twimg.com/media/CwcOry3WIAMpPHn.jpg',
      color: 'lightpurple',
    },
    {
      question: 'Who won the Nobel Prize in Literature in 2020?',
      answer: 'Louise Glück',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHZAydjyDx-u1cSlRVDlaR7dIVUhKE3XkDQ&usqp=CAU',
      color: 'lightgreen',
    },
    {
      question: 'Which Nobel laureate is known for discovering penicillin?',
      answer: 'Alexander Fleming',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0i34wPlz6vuhgtHxchCyTaOkJSUhOnBpUg&usqp=CAU',
      color: 'lightpurple',
    },
    {
      question: 'Who won the Nobel Prize in Physics in 2020?',
      answer: 'Roger Penrose, Reinhard Genzel, and Andrea Ghez',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBb6gCEBzjogNK_ckISb0qAgeI-CHcU2TwA&usqp=CAU',
      color: 'lightyellow',
    },
    {
      question: 'Who was the first African American woman to win a Nobel Prize?',
      answer: 'Toni Morrison',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkedTr-a05_H3PsCJ-P---nl17CIc7zX-Rg&usqp=CAU',
      color: 'lightpink',
    },
    {
      question: 'Which Nobel laureate is known for his nonviolent resistance movement in India?',
      answer: 'Mahatma Gandhi',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwg8lkeRKQJr6Ln2pwJB2L24RZt9oIdEkDg&usqp=CAU',
      color: 'lightpink',
    },
    {
      question: 'Which Nobel laureate is known for his work on the structure of DNA?',
      answer: 'James Watson and Francis Crick',
      image: 'https://www.ashg.org/wp-content/uploads/2019/10/Stockphoto-DNA-Simple2.png',
      color: 'lightyellow',
    },
    {
      question: 'Which Nobel laureate is known for his theory of evolution?',
      answer: 'Charles Darwin',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEC6MuZjZka_4fcCDu6VbbwEfM6z35wheoQ&usqp=CAU',
      color: 'lightpurple',
    },
    {
      question: 'Who was the first person to be awarded two Nobel Prizes?',
      answer: 'Marie Curie',
      image: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-05/4/16/enhanced/buzzfeed-prod-fastlane-03/longform-original-22996-1493928166-5.jpg?crop=1451:1069;146,46&output-format=jpg&output-quality=auto',
      color: 'lightpink',
    },
    {
      question: 'Which Nobel laureate is known for his discovery of the neutron?',
      answer: 'James Chadwick',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wQC7eriQuL-yedbOEDwdPABC7c3zPNMAyA&usqp=CAU',
      color: 'lightpurple',
    },
    // Add more cards here...
  ],
};

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [card, setCard] = useState(CARD_SET.cards[0]);

  useEffect(() => {
    setCard(CARD_SET.cards[cardIndex]);
  }, [cardIndex]);

  const handleNextClick = () => {
    setShowAnswer(false);
    const newIndex = Math.floor(Math.random() * CARD_SET.cards.length);
    setCardIndex(newIndex);
  };

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="App">
      <h1>{CARD_SET.title}</h1>
      <h3>{CARD_SET.description}</h3>
      <h4>Number of cards: 12</h4>
      <Card
        question={card.question}
        answer={card.answer}
        showAnswer={showAnswer}
        onCardClick={handleCardClick}
        image={card.image}
        color={card.color}
      />
      <button onClick={handleNextClick} className="button">Next</button>
    </div>
  );
}

export default App;
