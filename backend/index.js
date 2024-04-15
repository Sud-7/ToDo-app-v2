const express = require("express")
const app = express();

const { todo } = require( "./db.js")
const { createTodo, updateTodo } = require("./types.js");


app.use(express.json())


app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    // here we use async, as DB calls are promises as they take time to sync with DB depending on the location of DB.
    res.json({
        msg: "Todo created successfully"
    })
})


app.get("/todos", async (req, res) => {
    // same async function; find({}) calls all the data from backend
    const todos = await todo.find({})   
    res.json({
        todos
    })
})


app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(400).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    // update function of DB takes 2 arguements first loaction identified by ID and "what to change"; here "completed"
    await todo.updateOne ({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo Marked as completed"
    })
})

app.listen(3000);
