const questionsInitialState=[

]
    const questionReducer=(state=questionsInitialState,action)=>{
        switch(action.type){
            case "GET_QUESTIONS":{
                return [...action.payload]
            }
             case "ADD_QUESTION":{
                 return [...state,action.payload]
             }
            default:{
                return [...state]
            }

} 

   }
   export default questionReducer