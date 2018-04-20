'use strict';
module.exports = function(app) {
    var mediatheque = require('../controllers/mediathequeController');

    // Mediatheque Routes
    app.route('/albums')
        .get(mediatheque.getAlbums)

    // Mediatheque Routes
    app.route('/artistes')
        .get(mediatheque.getArtistesDisctinct)



    app.route('/album/:taskId')
        .get(mediatheque.getAlbum)
        .post(mediatheque.setAlbum)
        .put(mediatheque.updateAlbum)
        //.delete(mediatheque.deleteAlbum);
};