module.exports = function (grunt) {
  grunt.initConfig({
    karma: {
      dev: {
        configFile: 'config/karma.dev.js'
      },
      ci: {
        configFile: 'config/karma.ci.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
};
