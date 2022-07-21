const express = require("express");

const TodoRouter = new express.Router()
TodoRouter.use(express.json())

TodoRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const TodoSchema = require("./TodoSchema");

// read all data
TodoRouter.get('/todo', async (req, res) => {
    try {
        const getdata = await TodoSchema.find({})
        res.status(201).send(getdata);
    }
    catch (err) {
        res.status(400).send(err)
    }
});


// read data by id
TodoRouter.get('/todo/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await TodoSchema.findById(_id)
        res.status(201).send(getdata)
    }
    catch (err) {
        res.status(400).send(err)
    }
});


// post data
TodoRouter.post('/todo', async (req, res) => {
    try {
        const postdata = new TodoSchema(req.body)
        const insertPost = await postdata.save();
        res.status(201).send(insertPost)
    }
    catch (err) {
        res.status(400).send(err)
    }
});

// update all object data by id (put method)
TodoRouter.put('/todo/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await TodoSchema.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(getdata)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

// update all object data by id (patch method)
TodoRouter.patch('/todo/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await TodoSchema.findByIdAndUpdate(_id, req.body)
        res.status(201).send(getdata)
    }
    catch (err) {
        res.status(400).send(err)
    }
})


// delete data by id
TodoRouter.delete('/todo/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await TodoSchema.findByIdAndDelete(_id, {
            // new show immediately update data
            new: true
        })

        res.status(201).send(getdata)
    }
    catch (err) {
        res.status(400).send(err)
    }
});


// deleteAll data by id
TodoRouter.delete('/todo', async (req, res) => {
    const ids = req.body
    try {
        await TodoSchema.deleteMany({ _id: { $in: ids } }, {
            // new show immediately update data
            new: true
        })
        res.status(201).send(ids)
    }
    catch (err) {
        res.status(400).send(err)
    }
});




module.exports = TodoRouter