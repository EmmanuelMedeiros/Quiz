import './Question.css'
import { QuizContext } from '../context/quiz'
import { useContext } from 'react'
import Option from './Option'

const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]
    const onSelectedOption = (option) => {
        dispatch({
            type:"CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option }
        })
    }


    return(

        <div id="question">
            <h1>Pergunta {quizState.currentQuestion + 1}/{quizState.questions.length}</h1>

            <h2>{currentQuestion.question}</h2>
            <div id="optionsBlock">
                {currentQuestion.options.map((option) => (
                    <Option option = {option}
                     key={option}
                     answer={currentQuestion.answer}
                     selectOption={() => onSelectedOption(option)} />
                ))}
            </div>
            {quizState.answerSelected && (<button onClick={() => dispatch({type: "changeQuestion"})} 
            id='teste'>Próxima pergunta
            </button>)}
        </div>

    )

}

export default Question;