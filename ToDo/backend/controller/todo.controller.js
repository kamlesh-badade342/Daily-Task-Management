const TODoServices = require('../services/todo.services')

exports.createTodo = async (req,res,next)=>{
    try{
        const {userId,title,desc} =  req.body;
        let todo = await TODoServices.createTodo(userId,title,desc);
        res.json({status:true,success:todo});
    }
    catch(error){
        next(error);
    }
}

exports.getUserTodo = async (req,res,next)=>{
    try{
        const {userId} = req.body;
        let todo = await TODoServices.getTododata(userId);
        console.log(todo);
        res.json({status:true,success:todo})
        // let todo = await TODoServices.
    }
    catch(error){
        next(error);
    }
}
exports.deletetodo = async (req,res,next)=>{
    try{
        const {id} = req.body;
        let deleted = await TODoServices.deletetodo(id);
        // console.log(deleted);
        res.json({status:true,success:deleted})
        // let todo = await TODoServices.
    }
    catch(error){
        next(error);
    }
}