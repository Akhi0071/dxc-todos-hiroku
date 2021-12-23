const express = require("express");
const { TodoRouter } = require("./router/todo.router");

require("./db");
const app = express();

const PORT = process.env.PORT || 9090;

app.use(express.json());

app.use("/todos", TodoRouter);
app.listen(PORT, () => { console.log("Server started at PORT : ", PORT)})