import React, { useState } from "react";
import img1 from "./Image.svg";
import { Button } from "./Start";
import { AiFillCheckCircle } from "react-icons/ai";

const Quiz = ({ quizzes,setCorr,corr,setExit,exit }) => {
    const [current,setCurrent]=useState(0)
    const [ans ,setAns]=useState('')
    console.log(quizzes[current]);

    const handleButton=()=>{
        // ---------Correct Answer increase score
        if(quizzes[current].correct === ans){
            setCorr(corr+1)
        }
        // ---------At last return to the result page
        if((current+1)=== quizzes.length){
            setExit(true)
        }else{
            if(ans){ //-------after select only next question will come 
                setCurrent(current+1)
            }
        }
        setAns('')
    }
  return (
    <div className="Quiz_main_container_div">
      <div className="Quiz_imageContainer ">
        <img src={img1} />
      </div>
      <div className="Quiz_container">
        <div className="Quiz_ShowContainerNumber">
          <div className="Quiz_ContainerNumber">
            <div className="Quiz_Containerboredr">
              <div className="Quiz_boredr">
                <h2>{current+1}</h2>
                <p>/{quizzes.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Quiz_Question_container_div">
          <div className="Quiz_Question_container">
            <p>
             {quizzes[current].question}
            </p>
          </div>
          <div className="Quiz_Question_AnswerScroll">
            <div className=" Quiz_Question_AnswerDiv">
              <p className={ans==='a'? "Quiz_select_Answer": ''} 
              onClick={()=>setAns('a')}>
                <span className={`Quiz_span1 ${ans=== 'a'?'Quiz_span1select':''} `}>
                  <AiFillCheckCircle className={`Quiz_AiFillCheckCircle ${ans==='a' ?'Quiz_Aiselect': ''} `} />
                </span>
                <span className="Quiz_span2"> {quizzes[current].a}</span>
              </p>
              <p className={ans==='b'? "Quiz_select_Answer": ''} 
              onClick={()=>setAns('b')}>
                {" "}
                <span className={`Quiz_span1 ${ans=== 'b'?'Quiz_span1select':''} `}>
                  <AiFillCheckCircle className={`Quiz_AiFillCheckCircle ${ans==='b' ?'Quiz_Aiselect': ''} `}/>
                </span>{" "}
                <span className="Quiz_span2"> {quizzes[current].b}</span>{" "}
              </p>
              <p className={ans==='c'? "Quiz_select_Answer": ''}  onClick={()=>setAns('c')}>
                {" "}
                <span className={`Quiz_span1 ${ans=== 'c'?'Quiz_span1select':''} `}>
                  <AiFillCheckCircle className={`Quiz_AiFillCheckCircle ${ans==='c' ?'Quiz_Aiselect': ''} `}/>
                </span>{" "}
                <span className="Quiz_span2"> {quizzes[current].c}</span>{" "}
              </p>
              <p className={ans==='d'? "Quiz_select_Answer": ''}  onClick={()=>setAns('d')}>
                {" "}
                <span className={`Quiz_span1 ${ans=== 'd'?'Quiz_span1select':''} `}>
                  <AiFillCheckCircle className={`Quiz_AiFillCheckCircle ${ans==='d' ?'Quiz_Aiselect': ''} `}/>
                </span>{" "}
                <span className="Quiz_span2"> {quizzes[current].d}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button name="Next" arrow={true} handleButton={handleButton} />
    </div>
  );
};

export default Quiz;
