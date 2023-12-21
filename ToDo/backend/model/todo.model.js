const mongoose = require("mongoose");
const db = require("../config/db");
const { Schema } = mongoose
const UserModel = require("./user.model")
const todoSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:UserModel.modelName
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
});

const ToDoModel = db.model('tode',todoSchema);
module.exports = ToDoModel;