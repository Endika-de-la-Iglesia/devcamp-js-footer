'use strict';

var moment = require('moment');

/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    const footerText = "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
    return footerText;
};