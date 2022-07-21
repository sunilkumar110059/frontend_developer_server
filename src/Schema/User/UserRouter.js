const express = require("express");
const UserRouter = new express.Router()
UserRouter.use(express.json())
UserRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const UserSchema = require("./UserSchema");

// read all data
UserRouter.get('/user', async (req, res) => {
    try {
        const getdata = await UserSchema.find({})
        res.status(201).send(getdata);
    }
    catch (err) {
        res.status(400).send(err)
    }
});


// read data by id
UserRouter.get('/user/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await UserSchema.findById(_id)
        res.status(201).send(getdata)
    }
    catch (err) {
        res.status(400).send(err)
    }
});


// post data
UserRouter.post('/user', async (req, res) => {
    try {
        const postdata = new UserSchema(req.body)
        const insertPost = await postdata.save();
        res.status(201).send(insertPost)
    }
    catch (err) {
        res.status(400).send(err)
    }
});

// update all object data by id (put method)
UserRouter.put('/user/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await UserSchema.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(getdata)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

// update all object data by id (patch method)
UserRouter.patch('/user/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await UserSchema.findByIdAndUpdate(_id, req.body)
        res.status(201).send(getdata)
    }
    catch (err) {
        res.status(400).send(err)
    }
})


// delete data by id
UserRouter.delete('/user/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await UserSchema.findByIdAndDelete(_id, {
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
UserRouter.delete('/user', async (req, res) => {
    const ids = req.body
    try {
        await UserSchema.deleteMany({ _id: { $in: ids } }, {
            // new show immediately update data
            new: true
        })
        res.status(201).send(ids)
    }
    catch (err) {
        res.status(400).send(err)
    }
});




module.exports = UserRouter