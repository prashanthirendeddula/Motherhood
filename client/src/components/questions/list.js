import React from "react"
import {connect} from "react-redux"
import  {Link} from 'react-router-dom'
import {findQuestion} from "../../selectors/question"

import {startGetQuestions} from "../../action/questions"
function Questions(props){

     if(props.questions.length==0){
        props.dispatch(startGetQuestions())
    }
    return(
        <div>
            <h1>Listing Questions-{props.questions.length}</h1>
            <ul>
                {
                    props.questions.map(ele=>{
                        return <li key={ele._id}><Link to={`/questions/${ele._id}`}>{ele.question}-{ele.user.username}</Link>
                        </li>
                    })
                }
            </ul>
            <Link to="/questions/new">AddQuestion</Link>

        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        questions:state.questions,
        question:findQuestion(state.questions,id),
  //  user:state.user

    }
}

export default connect(mapStateToProps)(Questions)