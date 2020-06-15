import {createStore,combineReducers,applyMiddleware}from "redux"
import thunk from"redux-thunk"
import userReducer from '../reducers/userReducer'
import questionsReducer from "../reducers/questions"
import answersReducer from "../reducers/answers"
const configureStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        questions:questionsReducer,
        answers:answersReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore