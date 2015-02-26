module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   /* pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }*/
	
	jshint: {
    all: ['Gruntfile.js', 'main/*.js'] //проверяем папки
  },
	
	
	//
	uglify: {
    my_target: {
      files: {
        'output.min.js': ['main/main.js']
      }
    }
  }
	
	
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-uglify'); //для минимизации
  grunt.loadNpmTasks('grunt-contrib-jshint'); //для проверки ошибок
  // Default task(s).
  grunt.registerTask('default', []);

};