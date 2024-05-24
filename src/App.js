import React, { useState, useEffect } from 'react';
import Question from './components/Question.js'
import Options from './components/Options.js';
import Timer from './components/Timer.js';
import Results from './components/Results.js';
import './css/styles.css';

const fetchQuestions = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const questions = await response.json();
  console.log(questions)
  return questions.slice(0, 10);
};

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [time, settime] = useState(30);
  const [isAnswerable, setIsAnswerable] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const uploadQuestions = async () => {
      const fetchedQuestions = await fetchQuestions();
      setQuestions(fetchedQuestions);
    };
    uploadQuestions();
  }, []);

  useEffect(() => {
    if (time > 0 && currentQuestionIndex < 10) {
      const timerId = setInterval(() => {
        settime(prevTime => {
          if (prevTime === 21) {
            setIsAnswerable(true);
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timerId);
    } else if (time <= 0 && currentQuestionIndex < 10) {
      timesUp();
    }
  }, [time, currentQuestionIndex]);

  const timesUp = () => {
    setUserAnswers(prevAnswers => [...prevAnswers, null]);
    showNextQuestion();
  };

  const handleSelectOption = (option) => {
    if (isAnswerable) {
      setUserAnswers(prevAnswers => [...prevAnswers, option]);
      showNextQuestion();
    }
  };

  const showNextQuestion = () => {
    if (currentQuestionIndex <= 9) {
      settime(30);
      setIsAnswerable(false);
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  }
  };

  if (currentQuestionIndex >= 10 ) {
    return <Results userAnswers={userAnswers} />;
  }

  return (
    <div>
      <div id="question-card">
        {(questions.length > 0 && currentQuestionIndex<=10) && (
          <>
             <button className='question-number'> Question : {currentQuestionIndex +1} </button>
            <Question question={questions[currentQuestionIndex]} />
            <Options
              options={questions[currentQuestionIndex].body.split('\n').slice(0, 4)}
              onSelectOption={handleSelectOption}
              isAnswerable={isAnswerable}
            />
            <Timer time={time} onTimeUp={timesUp} />
          </>
        )}
      </div>


    </div>
  );
};

export default App;
