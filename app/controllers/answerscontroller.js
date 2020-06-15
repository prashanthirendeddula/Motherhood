const {authenticateUser}=require('../middleware/authenticate')
const Answer=require("../model/answer")
//localhost:3700/answers
module.exports.answers=function(req,res){
    Answer.find().populate("user")
       .then((answer)=>{
           res.json(answer)
       })
       .catch((err)=>{
           res.json(err)
       })
}
//post
module.exports.sendAnswer=function(req,res){
    const body=req.body
    const {user}=req
    const {question}=req

    console.log(req.body)
    const answer=new Answer(body,user._id)
    answer.save()
       .then((answer)=>{
           res.json(answer)
       })
       .catch((err)=>{
           res.send(err)
       })
}