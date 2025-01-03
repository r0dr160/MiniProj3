const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nome é obrigatório']
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatório']
    },
    phone: {
        type: String,
        required: [true, 'Telefone é obrigatório']
    }
}, { timestamps: true });

module.exports = mongoose.model('Sponsor', sponsorSchema);
