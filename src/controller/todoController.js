const { TodoModel } = require("../model/todo.model");

const getAllTodos = (req, res) => {
    TodoModel.find()
        .then(todos => {
            return res.send(todos);
        })
        .catch(err => {
            console.log(err);
            return res.send(err)
        })
}
const getSingleTodo = (req, res) => {
    const { id } = req.params
    TodoModel.findById(id)
    .then(todos => {
        return res.send(todos)
    }) 
}

const createTodo = (req, res) => {
    const newTodo = new TodoModel(req.body)
    newTodo.save()
    .then(todos => {
        return res.send(todos)
    })
    .catch(err => {
        console.log(err);
        return res.send(err)
    })
}
const updateTodo = (req, res) => {
    const { id } = req.params
    TodoModel.findByIdAndUpdate(id, req.body)
    .then(todos => {
        return res.send(todos)
    })
    .catch(err => {
        console.log(err);
        return res.send(err)
    })
}

const deleteTodo = (req, res) => {
    const { id } = req.params
    TodoModel.findOneAndDelete(id)
    .then(todos => {
        return res.send(todos)
    })
    .catch(err => {
        console.log(err);
        return res.send(err)
    })
}


module.exports = {
    getAllTodos,
    getSingleTodo,
    createTodo,
    updateTodo,
    deleteTodo
}