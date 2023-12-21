const express = require('express');
const body_parser = require('body-parser')
const userRouter = require('./routers/user_router');
const Todorouter = require('./routers/todo.router');
const { models } = require('mongoose');

const app = express();
app.use(body_parser.json());
app.use('/',userRouter);
app.use('/',Todorouter);
module.exports = app;
