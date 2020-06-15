import React from "react"
import { connect } from "react-redux"
import {findQuestion} from "../../selectors/question"
import  {Link} from 'react-router-dom'

function QuestionShow(props){
    
  
    return(
        <div>
            <h1>question name-{props.question.question}</h1>
        {   /* <ul>
                {
                     props.questions.map(ele=>{
                        return <li key={ele._id}>{ele.user.username}
                        </li>
                    })
                
                }
            </ul>*/}
            <Link  to='/answers'>send Answer</Link>
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    

    return{


        question:findQuestion(state.questions,id),
        questions:state.questions


    }

}
export default connect(mapStateToProps)(QuestionShow)