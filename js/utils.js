var Revision = {};

Revision.utils = (function () {
    'use strict';

    return {
        /**
         * Permet de mélanger un array de façon random.
         * Source de la méthode : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
         *
         * @param {Array} arr
         *
         * @return {Array}
         */
        shuffle: function (arr) {

            var currentIndex = arr.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Revision.utils.random(currentIndex);
                currentIndex -= 1;

                temporaryValue = arr[currentIndex];
                arr[currentIndex] = arr[randomIndex];
                arr[randomIndex] = temporaryValue;
            }

            return arr;
        },

        /**
         * Retourne un nom random entre 0 et max (max non compris).
         *
         * @param {Integer} max
         *
         * @return {Integer}
         */
        random: function (max) {
            return Math.floor(Math.random() * max);
        },

        /**
         * Génère un array avec tous le vocabulaire.
         *
         * @param {Object} wordsObj
         *
         * @return {Array}
         */
        wordsToArray: function (wordsObj) {
            var words = [];

            for (var groupName in wordsObj) {
                for (var i = 0; i < wordsObj[groupName].length; i++) {
                    words.push(wordsObj[groupName][i]);
                }
            }

            return words;
        }
    };
})();