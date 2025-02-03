const express = require('express');
const blogs = require('../model/db');
const router = express.Router();

router.post('/adddata', async (req, res) => {

    const { name, image, price, desc } = req.body;
    if (!name || !image || !price || !desc)
        res.status(500).json({
            success: false,
            message: "Error in data or empty data"
        })
    else {
        console.log(name + image + price + desc);
        const re = await blogs.create({ name: name, image: image, prices: price, desc: desc });
        if (re) {
            res.status(200).json({
                success: true,
                message: "got it data inserted ",
                data: re.data
            })

        }

    }

})
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);

    if (!id) {
        res.status(404).json({
            success: false,
            message: "not found id"
        })


    }
    else {

        const ress = await blogs.findByIdAndDelete({ _id: id });
        if (ress) {
            res.status(202).json({
                success: true,
                message: "got and the delete the data"
            })
        }
    }




})
router.get('/getall', async (req, res) => {

    const datta = await blogs.find();
    if (!datta) {
        res.status(404).json({

            success: false,
            message: "error while getting data"
        })
    }
    else {
        res.status(201).json({
            success: true,
            data: datta,
            message: "Got the data "
        })
    }

})
router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, image, prices, desc } = req.body;

    if (!name || !image || !prices || !desc) {
        res.status(404).json({
            success: false,
            message: "fill all data "
        })
    }
    else {
        const ress = await blogs.findByIdAndUpdate({ _id: id }, { name: name, image: image, prices: prices, desc: desc });
        if (!ress) {
            res.status(402).json({
                success: false,
                message: "error while updating"
            })
        }
        else {
            res.status(201).json({

                sucess: true,
                data: ress,
                message: "updated success"

            })
        }

    }


})
router.get('/updatedetails/:id', async (req, res) => {

    const { id } = req.params;
    const ress = await blogs.findOne({ _id: id });
    if (ress) {
        console.log(ress)
        res.status(202).json({
            success: true,
            data: ress,
            message: "Got the data by id"
        })
    }
    else {
        res.status(404).json({
            success: false,
            message: "failed to get the data"
        })
    }


})


module.exports = router;