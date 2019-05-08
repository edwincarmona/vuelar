const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
         'resources/js/all.min.js',
         'resources/js/app.js',
         'resources/js/pal_nav.js'
      ], 
      'public/js/app.js')
   .styles([
            'resources/css/bootstrap.css',
            'resources/css/app.css'
            ],
         'public/css/app.css');
