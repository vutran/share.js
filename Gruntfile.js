module.exports = function(grunt) {

  grunt.initConfig({
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
  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register Tasks
  grunt.registerTask('default', ['uglify']);

};
