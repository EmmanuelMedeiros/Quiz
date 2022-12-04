import { QuizContext } from "../context/quiz";
import endImage from'../img/endPage.svg'
import './endPage.css'
import { useContext } from "react";

const EndPage = () => {

    const [quizState, dispatch] = useContext(QuizContext)


    return (
        <div id="endPage">

            <h1>Parabéns!! Você finalizou o questionário</h1>
            <img src={endImage} alt="" srcset="" />
            <h3>Sua pontuação foi {quizState.score} de {quizState.questions.length} questões</h3>
            <button onClick={() => dispatch({type: "RESTART"})}>
                Recomeçar
                </button>

        </div>
    )

}

export default EndPage