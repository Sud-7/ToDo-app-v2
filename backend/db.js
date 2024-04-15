const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://sjharock99:xo9E98nwIMNo33dL@cluster0.txr1ux5.mongodb.net/todosApp")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo: todo
    // when key and value are the same use shorter syntax todo: todo,
}
