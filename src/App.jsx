import React, { useState } from 'react'
import Quizpage from './components/Quizpage'
import Result from './components/Result'


function App() {
const [score,setScore]=useState(0)
const [end,setEnd]=useState(false)

  return (
    <div>
      {
        end?<Result score={score} />:<Quizpage end={end} setEnd={setEnd} score={score} setScore={setScore} />
      }
    </div>
  )
}

export default App
