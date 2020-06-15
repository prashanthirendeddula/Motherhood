export const findAnswer=(answers,id)=>{

    return answers.find(answer=>answer._id==id)
}