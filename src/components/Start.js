import React from "react";
import Frame from "./Frame.svg";
import quiz from "./Group 3.svg";



export const Button=({name,arrow,handleButton})=> {

  return (
    <div className="start_Button_Position">
        <button className="sw start_Button" onClick={handleButton}>{name}
        {arrow===true?
        <span className="Start_buttonArrow">&#8594;</span>
          :''
        }
        
        </button>

      </div>
  )
}


const Start = ({setStart}) => {

  const handleButton=()=>{
    setStart(true)
  }

  return (
    <div className="Start_main_container_div">
      <div className="start_img1">
        <img src={Frame} />
      </div>
      <div className="start_img2">
        <img src={quiz} />
      </div>
      <div></div>


      <Button name='Start' handleButton={handleButton} /> 
    </div>
  );
};

export default Start;
