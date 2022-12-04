import { createContext, useReducer } from "react";
import questions from '../data/questions'

const stages = ["NewComer", "Player", "Traveller"]

const firstStage = {
    userStage: stages[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false
};

const quizReducer = (state, action) => {

    switch(action.type) {
        case "CHANGE_STATE": 
            return {
                ...state, userStage: stages[1]
            };
        
        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - .5;
            })
            return{
                ...state, reorderedQuestions
            }

        case "changeQuestion": 
            const newQuestion = state.currentQuestion + 1;
            console.log(firstStage.userStage)
            if (state.currentQuestion == 4) {
                return {
                    ...state, userStage: stages[2]
                }
            }
            return {
                ...state, currentQuestion: newQuestion,
                answerSelected:false
            }

        case "RESTART":
            return firstStage

        case "CHECK_ANSWER":

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0 

            if (answer === option) {
                correctAnswer += 1;
            }

            return {
                ...state, score: state.score + correctAnswer, answerSelected: option
            }
        
        default: 
            return state;
    }

}


export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, firstStage);

    return <QuizContext.Provider value = {value}>{children}</QuizContext.Provider>
}