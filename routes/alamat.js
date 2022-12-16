// (5) Buat router Alamat
const express = require('express')
const router = express.Router() 
const Alamat = require('../models/Alamat')

// Create 
router.post('/', async(req, res) => {
    // tampung input alamat 
    const alamatPost = new Alamat({
        jalan: req.body.jalan,
        kecamatan: req.body.kecamatan,
        kota: req.body.kota,
        provinsi: req.body.provinsi
    })

    try {
        // simpan data 
        const alamat = await alamatPost.save()
        // response
        res.json(Alamat)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const alamat = await Alamat.find()
        res.json(alamat)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:alamatId', async(req, res) => {
    // tampung input alamat 
    const data = {
        jalan: req.body.jalan,
        kecamatan: req.body.kecamatan,
        kota: req.body.kota,
        provinsi: req.body.provinsi
    }

    try {
        // update data 
        const alamat = await Alamat.updateOne({_id: req.params.alamatId}, data)
        // response
        res.json(alamat)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:alamatId', async(req, res) => {
    try {
        // delete data 
        const alamat = await Alamat.deleteOne({_id: req.params.alamatId})
        // response
        res.json(alamat)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router