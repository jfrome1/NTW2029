module.exports = function(grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		scsslint: {

			lint: {
				options: {
					config: '.scss-lint.yml',
					reporterOutput: 'scss-lint-reporter.xml'
				}
			}
		},

		libsass: {

			test: {
				options: {
					outputStyle: 'expanded',
					sourceMap: false,
					includePaths: [
						'./node_modules/sass-true/sass',
						'./scss'
					]
				},
				files: {
					'./spec/results-libsass.css' : './spec/tests.scss'
				}
			}
		},

		rubysass: {

			test: {
				options: {
					style: 'expanded',
					sourcemap: 'none',
					loadPath: [
						'./node_modules/sass-true/sass',
						'./scss'
					]
				},
				files: {
					'./spec/results-rubysass.css' : './spec/tests.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-scss-lint');
	grunt.loadNpmTasks('grunt-sass');
	grunt.renameTask('sass', 'libsass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.renameTask('sass', 'rubysass');

	grunt.registerTask('test', ['libsass:test', 'rubysass:test']);
	grunt.registerTask('lint', ['scsslint:lint']);
};
