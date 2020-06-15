const express=require('express')
const router=express.Router()
const userscontroller=require("../app/controllers/userscontroller")
const questionscontroller=require('../app/controllers/questionscontroller')
const answerscontroller=require('../app/controllers/answerscontroller')
const {authenticateUser}=require('../app/middleware/authenticate')
router.post('/users/register',userscontroller.create)
router.post('/users/login',userscontroller.login)
router.get('/users/account',authenticateUser,userscontroller.details)
router.delete('/users/logout',authenticateUser,userscontroller.remove)

router.get('/users/questions',questionscontroller.list)
router.post('/users/questions',authenticateUser,questionscontroller.createquestions)

router.get('/users/answers',answerscontroller.answers)
router.post('/answers',authenticateUser,answerscontroller.sendAnswer)
module.exports=router