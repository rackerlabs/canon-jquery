var options = require('./karma.base');

options.autoWatch = true;

module.exports = function (config) {
    config.set(options);
};
