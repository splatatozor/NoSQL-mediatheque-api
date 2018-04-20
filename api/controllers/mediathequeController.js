'use strict';


var mongoose = require('mongoose'),
    Album = mongoose.model('album');

var Artistes = {};

exports.getAlbums = function(req, res) {
    Album.find({}, function(err, album) {
        if (err)
            res.send(err);
        res.json(album);
    });
};


exports.getArtistesDisctinct = function (req, res) {
    Album.distinct('art_nom', function(err, artiste) {
        if (err)
            res.send(err);
        Artistes = res.json(artiste);
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