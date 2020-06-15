import React from "react"
import {connect} from "react-redux"
import {Link,withRouter} from "react-router-dom"
import {findQuestion} from "../../selectors/question"
class QuestionsForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            question:""
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
                question:this.state.question,
                user:this.props.user._id
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
                     name="question"
                      value={this.state.question}
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
         question:findQuestion(state.questions,id),
         user:state.user
     }
 }
 
export default withRouter(connect(mapStateToProps)(QuestionsForm))
