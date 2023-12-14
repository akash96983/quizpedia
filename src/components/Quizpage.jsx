import React, { useState } from 'react'
import '../App.css'
import questions from '../question.js'

function Quizpage(props) {

const [count,setCount]=useState(0);
const [mode,setMode] = useState(true);
const [highlighter,sethighlighter] = useState(true);
const {end,setEnd} = props;

const handleClick=(e)=>{
if(count+1<questions.length){
  if(e.target.id=="option1"){
    setCount(pre=>count+1);
    questions[count].options[0].isCorrect ? props.setScore(props.score+1) : null
  }
  else if (e.target.id=="option2"){
    setCount(pre=>count+1);
    questions[count].options[1].isCorrect ? props.setScore(props.score+1) : null
  }
  else if(e.target.id=="option3"){
    setCount(pre=>count+1);
    questions[count].options[2].isCorrect ? props.setScore(props.score+1) : null
  }
  else if (e.target.id=="option4"){
    setCount(pre=>count+1);
    questions[count].options[3].isCorrect ? props.setScore(props.score+1) : null
  }
}else{
  setEnd(!end)
}
}
const handleColor={
  color:mode?"black":"white"
}


  return (
    <div style={{backgroundColor:mode?"white":"grey",minHeight:'100vh'}}>
      <div id='firstarea'>
        <h1 id='sitename' style={handleColor}>QuizPedia</h1>
        <div id='questionnumber'>{count+1}/{questions.length}</div>
        <div id='bulbbg' onClick={()=>{setMode(!mode)}}><img id='bulb' src={mode ? "https://res.cloudinary.com/dduugsixy/image/upload/v1702470387/image-removebg-preview_21_zj3hf4.png" : "https://res.cloudinary.com/dduugsixy/image/upload/v1702536787/image-removebg-preview_22_iu9oox.png"} alt="" /></div>
      </div>
      <div id='line'></div>
      <div id='question' style={{color:highlighter?"rgb(226, 159, 4)":"red"}}>{questions[count].text}</div>
      <div id='options' onClick={(e)=>handleClick(e)}>
        <div className='alloptions' id='option1'>{questions[count].options[0].text}</div>
        <div className='alloptions' id='option2'>{questions[count].options[1].text}</div>
        <div className='alloptions' id='option3'>{questions[count].options[2].text}</div>
        <div className='alloptions' id='option4'>{questions[count].options[3].text}</div>
      </div>
      <div id='highlite' onClick={()=>{sethighlighter(!highlighter)}}><img id='highliteimg' src="https://res.cloudinary.com/dduugsixy/image/upload/v1702483230/image-removebg-preview_23_m4ciyj.png" alt="" /></div>
    </div>
  )
}

export default Quizpage 
