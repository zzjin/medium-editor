var mediumEditor = window.mediumEditor || {};

(function (window, document) {
    'use strict';

    mediumEditor.util = {
        extend: function extend(b, a) {
            var prop;
            if (b === undefined) {
                return a;
            }
            for (prop in a) {
                if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop) === false) {
                    b[prop] = a[prop];
                }
            }
            return b;
        }
    };

}(window, document));
