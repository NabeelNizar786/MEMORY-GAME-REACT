import { useState, useEffect } from 'react'
import './App.css'

const gameIcons = ["💐","👍","❤️","🎶","👀","👣","🫀","🕷️","🐧","🐼","⚽","🎖️"]

function App() {
  const [pieces, setPieces] = useState([]);
  console.log(gameIcons);

  const startGame = () => {
    const duplicateGameIcons = [...gameIcons, ...gameIcons];
    const newGameIcons = []

    while(newGameIcons.length < gameIcons.length * 2){
      const randomIndex = Math.floor(Math.random() * duplicateGameIcons.length);
      newGameIcons.push({
        emoji: duplicateGameIcons[randomIndex],
        flipped: false,
        solved: false,
        position: newGameIcons.length,
      });
      duplicateGameIcons.splice(randomIndex,1);
    }

    setPieces(newGameIcons);
  };

  useEffect(() => {
    startGame();
  }, [])
  
  return (
    <main>
      <h1>Memory Game in React</h1>
      <div className='container'>
        {pieces.map((data, index)=>(
                <div className="flip-card" key={index}>
                <div className="flip-card-inner">
                  <div className="flip-card-front"/>
                  <div className="flip-card-back">{data.emoji}
                  </div>
                </div>
              </div>
        ))}
      </div>
    </main>
  )
}

export default App
