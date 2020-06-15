import React from "react"
import {connect} from "react-redux"
import {Link,withRouter} from "react-router-dom"
import {findAnswer} from "../selectors/answer"
import {findQuestion} from "../../src/selectors/question"

class AnswersForm extends React.Component{

    constructor(props){
        super(props)
        this.state={
            answer:""
        }

    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value

        })
    }
        handleSubmit=(e)=>{
            e.preventDefault()
            const formData={
                answer:this.state.answer,
                user:this.props.user._id,
              //  question:this.props.question._id
            }
            console.log(formData)
            this.props.handleSubmit(formData)
        }
    
    
    render(){
        return(

            <div className="row">
                <div className="col-md-5 offset-md-3" >
      
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <input type="text"
                     name="answer"
                      value={this.state.answer}
                       onChange={this.handleChange}
                       className="form-control"/>

                    </div>
          <button className="btn btn-success" type="submit">post</button>
                    <br/>
                    <br/>
   <Link to='/users/questions'>back</Link>
                </form>
      </div>
            </div>
        )
        }
}
const mapStateToProps=(state,props)=>{
    // console.log('form',props)
    const id=props.match.params.id
     return{
         answer:findAnswer(state.answers,id),
         user:state.user,
         question:findQuestion(state.questions,id),

     }
 }
 
export default withRouter(connect(mapStateToProps)(AnswersForm))
