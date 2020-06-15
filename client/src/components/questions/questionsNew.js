import React from "react"
import { connect } from "react-redux"
import {Link} from "react-router-dom"
import QuestionsForm from "./questionsForm"
import {startAddQuestion} from "../../action/questions"
import {findQuestion} from "../../selectors/question"

function QuestionNew(props){
    const redirect=()=>props.history.push('/users/questions')

    const handleSubmit=(formData)=>{
        console.log(formData)

        props.dispatch(startAddQuestion(formData,redirect))
    }
    return(
        <div>
         <h1 className="text-center">ask a question</h1>

            <QuestionsForm handleSubmit={handleSubmit}/>

        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    

    return{


        question:findQuestion(state.questions,id)


    }
    console.log(props.question.id)

}
export default connect(mapStateToProps)(QuestionNew)