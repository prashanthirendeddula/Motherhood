const mongoose=require('mongoose')
const Schema=mongoose.Schema
const answerSchema=new Schema({
    answer:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
          ref:'User',
    
 
    },
   /* question:{
        type:Schema.Types.ObjectId,
        ref:"Question"
    }*/
   
    
})
const Answer=mongoose.model("Answer",answerSchema)
module.exports=Answer