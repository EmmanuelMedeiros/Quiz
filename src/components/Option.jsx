import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import './option.css'

const Option = ({option, selectOption, answer}) => {

    const [quizState, dispatch] = useContext(QuizContext)

    return (

        <div onClick={() => selectOption()} id="option">

        <button id="optBttn">{option}</button>

        </div>

    )

}

export default Option