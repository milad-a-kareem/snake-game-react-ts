import { useState } from 'react'
import './App.css'

const pieceSize = '1rem';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="Container">
        <div style={{width:pieceSize, height:pieceSize}}/>

      </div>
    </div>
  )
}

export default App
