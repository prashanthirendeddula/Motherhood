export const findQuestion=(questions,id)=>{

    return questions.find(question=>question._id==id)
    }