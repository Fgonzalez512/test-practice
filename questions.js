module.exports = {

    checkBook: function(books) {
        return books[0];
    },

    checkSongs: function(songs) {
        for (var i = 0; i < songs.length; i++) {
            return songs[i];
        }
    },

    checkCars: function(riders, cars) {
        for (var i = 0, j = 0; i < riders.length, j < cars.length; i++, j++) {
            return riders[i] + " drives a " + cars[j];
        }
    },

    movies1: function(trilogies) {
        for (var i = 0; i < trilogies.length; i++) {
            for (var j = 0; j < trilogies[i].length; j++) {
                return trilogies[i][j];
            }
        }
    },

}
