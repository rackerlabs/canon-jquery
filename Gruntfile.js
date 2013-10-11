module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        // Options
        camelcase: true,
        eqeqeq: true,
        expr: true,
        forin: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        trailing: true,
        undef: true,
        unused: true,

        // Environments
        browser: true,
        node: true,

        // Global
        globals: {
          afterEach: true,
          beforeEach: true,
          describe: true,
          expect: true,
          it: true,
          jasmine: true
        }
      },
      all: {
        src: ['Gruntfile.js', 'lib/**/*.js', 'spec/**/*.js']
      }
    },
    karma: {
      dev: {
        configFile: 'config/karma.dev.js'
      },
      ci: {
        configFile: 'config/karma.ci.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['test']);
  grunt.registerTask('test', ['jshint:all', 'karma:ci']);
};
