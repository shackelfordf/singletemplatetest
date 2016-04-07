module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			target: {
				files: {
					'style/style.css' : 'sass/style.scss'
				}
			}
		},
		cssmin: {
			target: {
				files: {
				'style/style.min.css' : 'style/style.css'
				}
			}
		},
		uglify: {
			target: {
				files: {
					'js/theme_functions.min.js' : ['js/*.js','!js/*.min.js']
				},
				concat: {
					options: {
						separator: ';'
					},
					dist: {
						src: ['js/*.js','!js/*.min.js'],
						dest: 'js/theme_functions.min.js',
					}
				}
			}
		},
		imagemin: {
			target: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'min_images/'
				}]
			}
		},
		htmlmin: {
			target: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'index.html' : 'html/index.html'
				}
			}
		},
		watch: {
			sass: {
				files: 'sass/**/*.scss',
				tasks: ['sass','cssmin'],
				options: {
					livereload: true
				}
			},
			uglify: {
				files: ['js/*.js','!js/*.min.js'],
				tasks: ['uglify'],
				options: {
					livereload: true
				}
			},
			imagemin: {
				files: 'images/*.{png,jpg,gif}',
				tasks: ['imagemin']
			},
			htmlmin: {
				files: 'html/index.html',
				tasks: ['htmlmin'],
				options: {
					livereload: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default',['sass','cssmin','uglify','newer:imagemin:target','htmlmin', 'watch']);
};