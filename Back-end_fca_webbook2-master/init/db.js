const mongoose = require('mongoose');

module.exports = (app, callback) => {
    const CONFIG = require('../config/config');

    console.log("Tentando conectar ao banco de dados...");
    mongoose.connect(CONFIG.mongodb.uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Conexão ao banco de dados bem-sucedida");
            if (typeof callback === 'function') callback();
        })
        .catch((error) => {
            console.error("Erro ao conectar ao banco de dados:", error.message);
        });
};
