// (4) Buat Schema Alamat
const mongoose = require('mongoose')

const AlamatSchema = mongoose.Schema({
    // Buat Schema data
    jalan: {
        type: String,
        required: true
    },
    kecamatan: {
        type: String,
        required: true
    
    },
    kota: {
    type: String,
    required: true

    },
    provinsi: {
    type: String,
    required: true

    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Alamat', AlamatSchema)