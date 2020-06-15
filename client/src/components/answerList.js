import React from "react"
import {connect} from "react-redux"
import {findQuestion} from "../../src/selectors/question"

import {startGetAnswers} from "../action/answers"
function AnswersList(props){
    if(props.answers.length==0){
        props.dispatch(startGetAnswers())
    }
    return(
        <div>
        <h1>Listing Answers-{props.answers.length}</h1>  
        <ul>
            {
                props.answers.map(answer=>{
                    return <li key={answer._id}> {answer.answer}-{answer.user.username}   
                    </li>
            
                })

            }
        </ul>
        

        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id

    return{
         answers:state.answers,
         question:findQuestion(state.questions,id),
         questions:state.questions

    }
}
export default connect (mapStateToProps)(AnswersList)