// (5) Buat router Mahasiswa
const express = require('express')
const Karyawan = require('../models/Karyawan')
const router = express.Router() 
const Mahasiswa = require('../models/Karyawan')

// Create 
router.post('/', async(req, res) => {
    // tampung input mahasiswa 
    const mahasiswaPost = new Karyawan({
        nama: req.body.nama,
        umur: req.body.umur
    })

    try {
        // simpan data 
        const karyawan = await karyawanPost.save()
        // response
        res.json(karyawan)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const karyawan = await Karyawan.find()
        res.json(karyawan)
    } catch (error) {
        res.json({message: error})
    }
})


// Update 
router.put('/:karyawanId', async(req, res) => {
    // tampung input mahasiswa 
    const data = {
        nama: req.body.nama,
        umur: req.body.umur
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