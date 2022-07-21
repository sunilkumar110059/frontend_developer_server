const express = require("express");

const CityRouter = new express.Router()
CityRouter.use(express.json())

CityRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const CitySchema = require("./CitySchema");

// read all data
CityRouter.get('/city', async (req, res) => {
    try {
        const getdata = await CitySchema.find({})
        res.status(201).send(getdata);
    }
    catch (err) {
        res.status(400).send(err)
    }
});

// read data by id
CityRouter.get('/city/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await CitySchema.findById(_id)
        res.status(201).send(getdata)
    }
    catch (err) {
        res.status(400).send(err)
    }
});

CityRouter.post('/city', async (req, res) => {
    try {
        const postdata = new CitySchema(req.body)
        const insertPost = await postdata.save();
        res.status(201).send(insertPost)
    }
    catch (err) {
        res.status(400).send(err)
    }
});




module.exports = CityRouter