import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import AnswersForm from "../answersForm"
import {findAnswer} from "../../selectors/answer"

import {startAddAnswer} from "../../action/answers"
function SendAnswer(props){
    const redirect=()=>props.history.push('/users/answers')

  const handleSubmit=(formData)=>{
      props.dispatch(startAddAnswer(formData,redirect))
  }
    return(
        <div>
            <h1 className="text-center">send answer</h1>
            <AnswersForm handleSubmit={handleSubmit}/>

        </div>

        
    )
}
const mapStateToProps=(state,props)=>{
    // console.log('form',props)
    const id=props.match.params.id
     return{
         answer:findAnswer(state.answers,id)
     }
    }

export default connect(mapStateToProps)(SendAnswer)