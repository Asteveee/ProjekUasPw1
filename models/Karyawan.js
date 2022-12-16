// (4) Buat Schema Karyawan
const mongoose = require('mongoose')

const KaryawanSchema = mongoose.Schema({
    // Buat Schema data
    nama: {
        type: String,
        required: true
    },
    Umur: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Karyawan', KaryawanSchema)