var options = require('./karma.base');

options.singleRun = true;

module.exports = function (config) {
    config.set(options);
};
