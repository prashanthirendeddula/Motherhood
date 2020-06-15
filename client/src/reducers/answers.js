const answersInitialState=[

]
const answersReducer=(state=answersInitialState,action)=>{
    switch(action.type){
        case "GET_ANSWERS":{
            return [...action.payload]
        }
        case "SEND_ANSWER":{
            return [...state,action.payload]
        }
        default:{
            return[...state]
        }
    }
}
export default answersReducer