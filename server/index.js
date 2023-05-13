const express=require('express');
const mongoose=require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
// use express.json() to get data
app.use(express.json());
//PORT
const PORT = process.env.PORT || 5500;

//import routes
const TodoItemRoute = require('./routes/todoItems');

// Connect mongodb ......
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database Connected"))
.catch(err => console.log(err))


app.use('/',TodoItemRoute);


//add PORT and connect to server
app.listen(PORT, ()=> console.log("Server Connected"))