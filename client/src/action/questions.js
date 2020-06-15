import axios from "../config/axios"

export const setQuestions=(questions)=>{
    return{
       type:"GET_QUESTIONS",
       payload:questions
    }
}
export const startGetQuestions=()=>{
    return(dispatch)=>{  //async
        axios.get('/users/questions',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response.data)
           const questions=response.data
            dispatch(setQuestions(questions))
        })
    }
}
export const addQuestions=(question)=>{
    return{
        type:"ADD_QUESTION",
        payload:question
    }
}
export const startAddQuestion=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/users/questions',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
          .then((response)=>{
              console.log("hi",response.data)
              const question=response.data
              dispatch(addQuestions(question))
              redirect()
          })
    }
}