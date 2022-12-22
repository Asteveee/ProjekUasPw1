// (5) Buat router Barang
const express = require('express')
const Barang = require('../models/Barang')
const Karyawan = require('../models/Barang')
const router = express.Router() 
const Mahasiswa = require('../models/Barang')

// Create 
router.post('/', async(req, res) => {
    // tampung input barang
    const barangPost = new Barang({
        tipebarang: req.body.tipebarang,
        jumlahbarang: req.body.jumlahbarang
    })

    try {
        // simpan data 
        const barang = await barangPost.save()
        // response
        res.json(barang)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const barang = await Barang.find()
        res.json(barang)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:barangId', async(req, res) => {
    // tampung input barang 
    const data = {
        tipebarang: req.body.tipebarang,
        jumlahbarang: req.body.jumlahbarang
    }

    try {
        // update data 
        const karyawan = await Karyawan.updateOne({_id: req.params.karyawanId}, data)
        // response
        res.json(karyawan)
    } catch (error) {
        res.json({message: error})
    }
})

// Delete 
router.delete('/:karyawanId', async(req, res) => {
    try {
        // delete data 
        const karyawan = await Karyawan.deleteOne({_id: req.params.karyawanId})
        // response
        res.json(karyawan)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router