import React from "react"
import {BrowserRouter,Link,Route,Switch} from "react-router-dom"
import {NavItem, NavLink, Nav, Breadcrumb, BreadcrumbItem } from 'reactstrap'

import  {connect} from "react-redux"
import Home from "./components/Home"
import Register from './components/auth/Register'
import Login  from './components/auth/Login'
import Account from "./components/Account"
import Questions from "../src/components/questions/list"
import QuestionNew from '../src/components/questions/questionsNew'
import QuestionShow from "../src/components/questions/questionShow"
import AnswersList from "../src/components/answerList"
import SendAnswer from "./components/questions/sendAnswer"
import {startUserLogout} from "./action/users"
import "antd/dist/antd.css";
import "./index.css";
import { Card } from "antd";
import {Layout} from "antd"
const { Header } = Layout;


function App(props){
  const handleLogout=()=>{
          props.dispatch(startUserLogout())
  }

    return(
      
        <BrowserRouter>
        

    <div className="container">
          <div className="row">
            
            <div className="col-md-4">
              
            <Link class="navbar-brand" to="/"> 
            
              
                <h2>Motherhood</h2>



 
           </Link>
          </div>
          <div className="col-md-8">
          <ul className="nav justify-content-end">


          <Link className="nav-link lr" to='/'>Home</Link><br/>
          {
  Object.keys(props.user).length!==0?(
    <React.Fragment>
                <li class="nav-item">

            <Link  className="nav-link"to="/users/account">Account</Link></li>
            <li class="nav-item">

               <Link className="nav-link" to="/users/questions">Questions</Link></li>
                    <li class="nav-item">

          <Link className="nav-link" to="/users/answers">Answers</Link></li>
          <li class="nav-item">

          <Link className="nav-link" to="#" onClick={handleLogout}>Logout</Link></li>

            </React.Fragment>
          ):(
            <React.Fragment>
                        <li class="nav-item">

           <Link className="nav-link" to='/users/register'>Register</Link></li>
           <li class="nav-item">

          <Link className="nav-link" to='/users/login'>Login</Link></li>

            </React.Fragment>
          )
          

}
</ul>
</div>
           
</div>
           

            <Switch>
          
          <Route path='/'component={Home} exact={true}/>
          <Route path='/users/register'component={Register}/>
          <Route path='/users/login'component={Login}/>
          <Route path='/users/account'component={Account}/>
          <Route path='/users/questions'component={Questions}/>
          <Route path='/questions/new'component={QuestionNew} exact={true}/>
          <Route path='/questions/:id'component={QuestionShow}/>
          <Route path='/answers'component={SendAnswer}/>
          <Route path='/users/answers' component={AnswersList}/>

          </Switch>
           </div>
          
          
          
      </BrowserRouter>
  
    )
}
const mapStateToProps=(state)=>{
  return{
  user:state.user
  }
}
export default connect(mapStateToProps) (App)