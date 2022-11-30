import React from 'react'
import img1 from "./Image.svg";
import { Button } from './Start'
import {GoPrimitiveDot} from 'react-icons/go'

const Result = ({correct,setCorrect,setStart,setExit,quizzes}) => {
    const handleButton=()=>{
        setCorrect(0);
        setStart(false)
        setExit(false)
    }
    let resu=Math.round((100*correct)/quizzes.length) //----------calculate percentage
  return (
    <div className="Quiz_main_container_div">
    <div className="Quiz_imageContainer ">
      <img src={img1} />
    </div>
    <div className="Result_container">
        <div className='Result_YourResult' >
        <h3>Your Result</h3>

        </div>
        <div className='Result_percentage '>
            <div className='Result_percentage_div'>
                <p>{resu}%</p>
            </div>
        </div>

      <div className="result_display">
        <p className='Result_Correct'> <GoPrimitiveDot className='GoPrimitiveDot' /> {correct} Correct</p>
        <p className='Result_Incorrect'> 
        <GoPrimitiveDot className='GoPrimitiveDots'  /> {quizzes.length-correct} Incorrect </p>
      
      </div>
    </div>
    <Button name="Start Again" handleButton={handleButton} />
  </div>
  )
}

export default Result