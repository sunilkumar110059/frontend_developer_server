const express = require("express");

const TabRouter = new express.Router()
TabRouter.use(express.json())

TabRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const TabSchema = require("./TabSchema");

// read all data
TabRouter.get('/tab', async (req, res) => {
    try {
        const getdata = await TabSchema.find({})
        res.status(201).send(getdata);
    }
    catch (err) {
        res.status(400).send(err)
    }
});

// read data by id
TabRouter.get('/tab/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await TabSchema.findById(_id)
        res.status(201).send(getdata)
    }
    catch (err) {
        res.status(400).send(err)
    }
});

TabRouter.post('/tab', async (req, res) => {
    try {
        const postdata = new TabSchema(req.body)
        const insertPost = await postdata.save();
        res.status(201).send(insertPost)
    }
    catch (err) {
        res.status(400).send(err)
    }
});




module.exports = TabRouter