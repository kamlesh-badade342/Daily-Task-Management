const ToDoModel = require("../model/todo.model")

class TODoServices{
    static async createTodo(userId,title,desc){
        const createTodo = new ToDoModel({userId,title,desc});
        return await createTodo.save(); 
    }

    static async getTododata(userId){
        return await ToDoModel.find({userId});
    }

    static async deletetodo(id){
        return await ToDoModel.findOneAndDelete({_id:id});
    }
}


module.exports = TODoServices;