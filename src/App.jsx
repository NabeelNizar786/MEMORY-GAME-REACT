import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const gameIcons = ["💐","👍","❤️","🎶","👀","👣","🫀","🕷️","🐧","🐼"]

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Memory Game in React</h1>
      <div className='container'>
        {gameIcons.map((data, index)=>(
                <div className="flip-card" key={index}>
                <div className="flip-card-inner">
                  <div className="flip-card-front"/>
                  <div className="flip-card-back">{data}
                  </div>
                </div>
              </div>
        ))}
      </div>
    </main>
  )
}

export default App
