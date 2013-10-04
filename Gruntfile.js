module.exports = function(grunt) {

  var
    config = {
      pkg : grunt.file.readJSON('package.json'),
      uglify : {
        options : {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n\n @author Vu Tran \n @link <http://vu-tran.com> \n @package <%= pkg.name %> \n @license <%= pkg.license %> \n*/\n'
        },
        build : {
          src : 'src/<%= pkg.name %>',
          dest : 'build/share.min.js'
        }
      }
    };

  grunt.initConfig(config);

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register Tasks
  grunt.registerTask('default', ['uglify']);

};
