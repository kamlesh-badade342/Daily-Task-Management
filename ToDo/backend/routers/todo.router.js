const ToDocontroller = require("../controller/todo.controller")
const router = require('express').Router();

router.post('/storeTodo',ToDocontroller.createTodo);
router.get('/getuserTodolist',ToDocontroller.getUserTodo);
router.post('/deleteTodo',ToDocontroller.deletetodo)
module.exports = router;

