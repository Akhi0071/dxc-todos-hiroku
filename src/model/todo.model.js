const { Schema, model } = require("mongoose")
//require("../db");

const todoSchema = new Schema({
    label : {
        type: String,
        required : true
    },
    status : {
        type : Boolean,
        required : true
    }
})

const TodoModel  = model("Todos", todoSchema);

module.exports = {TodoModel}
// //CREATE
// const newTodo = new TodoModel({label : "New Label", status : false})
// newTodo.save()
// .then(result => console.log(result))
// .catch(err => console.log(err))

// // READ
// TodoModel.find().then(documents =>{
//     console.log(documents)
// } ).catch(err => console.log(err))