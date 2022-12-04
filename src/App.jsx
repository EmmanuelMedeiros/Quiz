import { useState } from 'react'
import './App.css'
import { useContext } from 'react'

import Welcome from './components/Welcome'
import Question from './components/Question'
import { QuizContext } from './context/quiz'
import { useEffect } from 'react'
import EndPage from './components/EndPage'

function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
      dispatch({type: "REORDER_QUESTIONS"})
  }, []) 

  return (
    <div className="App">
      {quizState.userStage === "NewComer" && <Welcome/>}
      {quizState.userStage === "Player" && <Question/>}
      {quizState.userStage === "Traveller" && <EndPage/>}
    </div>
  )
}

export default App
