'use strict';


var mongoose = require('mongoose'),
    Album = mongoose.model('album'),
    Artiste = mongoose.model('artiste');

exports.getAlbums = function(req, res) {
    Album.find({}, function(err, album) {
        if (err)
            res.send(err);
        res.json(album);
    });
};


exports.getArtistes = function (req, res) {
    Artiste.find({}, function(err, artiste) {
        if (err)
            res.send(err);
        res.json(artiste);
    });
};

exports.setAlbum = function(req, res) {
    var new_album = new Album(req.body);
    new_album.save(function(err, album) {
        if (err)
            res.send(err);
        res.json(album);
    });
};


exports.getAlbum = function(req, res) {
    Album.findById(req.params.alb_nom, function(err, album) {
        if (err)
            res.send(err);
        res.json(album);
    });
};


exports.updateAlbum = function(req, res) {
    Album.findOneAndUpdate({_id: req.params.alb_nom}, req.body, {new: true}, function(err, album) {
        if (err)
            res.send(err);
        res.json(album);
    });
};


exports.deleteAlbum = function(req, res) {
    Album.remove({
        _id: req.params.alb_nom
    }, function(err, album) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};