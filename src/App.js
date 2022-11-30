import React, { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Start from "./components/Start";

const quizzes = [
  {
    question: "What is the scientific name of a butterfly?",
    a: "Apis",
    b: "Coleoptera",
    c: "Formicidae",
    d: "Rhopalocera",
    correct: "d",
  },
  {
    question: "How hot is the surface of the sun?",
    a: "1,233 K",
    b: "5,778 K",
    c: "12,130 K",
    d: "101,300 K",
    correct: "b",
  },
  {
    question: "Who are the actors in The Internship?",
    a: "Ben Stiller, Jonah Hill",
    b: "Courteney Cox, Matt LeBlanc",
    c: "Kaley Cuoco, Jim Parsons",
    d: "Vince Vaughn, Owen Wilson",
    correct: "d",
  },
  {
    question: "What is the capital of Spain?",
    a: "Berlin",
    b: "Buenos Aires",
    c: "Madrid",
    d: "San Juan",
    correct: "c",
  },
  {
    question:
      "What are the school colors of the University of Texas at Austin?",
    a: "Black, Red",
    b: "Blue, Orange",
    c: "White, Burnt Orange",
    d: "White, Old gold, Gold",
    correct: "c",
  },
  {
    question: "What is 70 degrees Fahrenheit in Celsius?",
    a: "18.8889",
    b: "20",
    c: "21.1111",
    d: "158",
    correct: "c",
  },
  {
    question: "When was Mahatma Gandhi born?",
    a: "October 2, 1869",
    b: "December 15, 1872",
    c: "July 18, 1918",
    d: "January 15, 1929",
    correct: "a",
  },
  {
    question: "How far is the moon from Earth?",
    a: "7,918 miles (12,742 km)",
    b: "86,881 miles (139,822 km)",
    c: "238,400 miles (384,400 km)",
    d: "35,980,000 miles (57,910,000 km)",
    correct: "c",
  },
  {
    question: "What is 65 times 52?",
    a: "117",
    b: "3120",
    c: "3380",
    d: "3520",
    correct: "c",
  },
  {
    question: "How tall is Mount Everest?",
    a: "6,683 ft (2,037 m)",
    b: "7,918 ft (2,413 m)",
    c: "19,341 ft (5,895 m)",
    d: "29,029 ft (8,847 m)",
    correct: "d",
  },
  {
    question: "When did The Avengers come out?",
    a: "May 2, 2008",
    b: "May 4, 2012",
    c: "May 3, 2013",
    d: "April 4, 2014",
    correct: "b",
  },
  {
    question: "What is 48,879 in hexidecimal?",
    a: "0x18C1",
    b: "0xBEEF",
    c: "0xDEAD",
    d: "0x12D591",
    correct: "b",
  },
];

function App() {
  const [start, setStart] = useState(false); //--------start the quiz
  const [exit, setExit] = useState(false);//---------Exit the Quiz
  const [correct, setCorrect] = useState(0);//---------Correct Score state

  return (
    <div className="App_main_container_div">
      <div className="sw App_container_div">
        {exit === false ? (
          <>
            {start === true ? (
              <Quiz
                quizzes={quizzes}
                corr={correct}
                setCorr={setCorrect}
                setExit={setExit}
                exit={exit}
              />
            ) : (
              <Start setStart={setStart} />
            )}
          </>
        ) : (
          <Result correct={correct}
          setCorrect={setCorrect}
          setStart={setStart}
          setExit={setExit}
          quizzes={quizzes}
          />
        )}
      </div>
    </div>
  );
}

export default App;
