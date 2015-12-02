/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      resize_large: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2000,
            quality: 30
          },{
            width: 1600,
            quality: 30
          },{
            width: 1200,
            quality: 30
          },{
            width: 800,
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['*large.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      },

      resize_medium: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            quality: 30
          },{
            width: 1200,
            quality: 30
          },{
            width: 800,
            quality: 30
          },{
            width: 600,
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['*medium.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      },

      resize_small: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1200,
            quality: 30
          },{
            width: 800,
            quality: 30
          },{
            width: 600,
            quality: 30
          },{
            width: 400,
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['*small.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,svg}'],
          cwd: 'images_src/fixed',
          dest: 'images/fixed'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
