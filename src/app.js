const express = require("express");
const app = express();

require("../src/db/connection");
const port = process.env.port || 8000

const UserRouter = require('./Schema/User/UserRouter')
const TodoRouter = require('./Schema/Todo/TodoRouter')
const CityRouter = require('./Schema/City/CityRouter')

app.use(UserRouter, TodoRouter, CityRouter)


app.listen(port, () => {
    console.log(`connection is live at port ${port}`)
})

