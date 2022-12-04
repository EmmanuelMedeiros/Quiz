import InitialImage from "../img/question5.svg"
import "./Welcome.css";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";



const Welcome  = () => {

    const [quizState, dispatch] = useContext(QuizContext);


    return (
        <div id="welcome">
            
            <h1>Você está no questionário da Copa do Mundo 2022</h1>
            <img src={InitialImage} alt="imagemDeInício"/>
            <p>Clicando no botão abaixo você iniciará o questionário</p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
            𑈨𑈭𑈝𑈰𑈪𑈵𑈺
            </button>
            
        </div>
        
    )
}

export default Welcome;

