'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var album = new Schema({
    alb_nom: {
        type: String
    },
    alb_annee: {
        type: Number
    },
    alb_prix: {
        type: Number
    },
    art_nom: {
        type: String
    },
    art_type: {
        type: String
    },
    art_picture: {
        type: String
    },
    gen_libelle: {
        type: String
    },
    pay_libelle: {
        type: String
    },
    alb_picture: {
        type: String
    }
});

module.exports = mongoose.model('album', album);