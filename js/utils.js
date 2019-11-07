var Revision = {};

Revision.utils = (function () {
    'use strict';

    return {
        /**
         * Permet de mélanger un array de façon random.
         * Source de la méthode : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
         *
         * @param {Array} arr [description]
         *
         * @return {Array} [description]
         */
        shuffle: function (arr) {

            var currentIndex = arr.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = arr[currentIndex];
                arr[currentIndex] = arr[randomIndex];
                arr[randomIndex] = temporaryValue;
            }

            return arr;
        },
    };
})();