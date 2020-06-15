const {authenticateUSer}=require('../middleware/authenticate')
const Question=require('../model/question')
const _=require("lodash")
//localhost:3700/questoins
module.exports.list=function(req,res){
       Question.find().populate("user")
    .then((question)=>{
        res.json(question)
    })
    .catch((err)=>{
        res.json(err)
    })
}
//localhost:3000/users/questions
module.exports.createquestions=(req,res)=>{
    const body=req.body
    const {user}=req
   console.log(body)
    const question=new Question(body,user._id)
    console.log(question)
    question.save()
    .then((question)=>{
        res.send(question)

   })
    .catch((err)=>{
        res.send(err)
    })
}
