const express = require("express");
const app = express();

require("../src/db/connection");
const port = process.env.port || 8000

const UserRouter = require('./Schema/User/UserRouter')
const TodoRouter = require('./Schema/Todo/TodoRouter')
const CityRouter = require('./Schema/City/CityRouter')
const TabRouter = require('./Schema/Tab/TabRouter')

app.use(UserRouter, TodoRouter, CityRouter, TabRouter)


app.listen(port, () => {
    console.log(`connection is live at port ${port}`)
})

