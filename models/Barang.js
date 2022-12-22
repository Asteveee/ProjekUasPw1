// (4) Buat Schema Barang
const mongoose = require('mongoose')

const BarangSchema = mongoose.Schema({
    // Buat Schema data
    tipebarang: {
        type: String,
        required: true
    },
    jumlahbarang: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Barang', BarangSchema)