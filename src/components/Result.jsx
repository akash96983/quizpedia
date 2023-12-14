import React from 'react'
import questions from '../question'
import '../App.css'

function Result(props) {
  return (
    <div id='whole'>
      <div id='scorebg'>
      <p id='firstword'>{props.score} out of {questions.length}</p>
      <p id='percentage'>{(props.score/questions.length)*100}%</p>
      <button onClick={()=>{window.location.reload()}}>Restart</button>
      </div>
    </div>
  )
}

export default Result
