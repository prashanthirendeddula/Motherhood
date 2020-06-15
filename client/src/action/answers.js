import axios from "../config/axios"
//sync getting answers
export const setAnswers=(answers)=>{
    return{
        type:"GET_ANSWERS",
        payload:answers
    }
}
//async 
export const startGetAnswers=()=>{
    return(dispatch)=>{
        axios.get('/users/answers',{
            headers:{
                'x-auth':localStorage.getItem('authtoken')
            }
        })
          .then((response)=>{
              console.log(response.data)
              const answers=response.data
              dispatch(setAnswers(answers))

          })
    }
}
//sending answer
//sync
export const sendAnswer=(answer)=>{
    return{
        type:"SEND_ANSWER",
        payload:answer
    }
}

export const startAddAnswer=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/answers',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
           .then((response)=>{
               console.log(response.data)
               const answer=response.data
               dispatch(sendAnswer(answer))
               redirect()
           })
    }
}