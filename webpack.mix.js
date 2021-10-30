let mix = require('laravel-mix');

mix.sass('src/resources/scss/app.scss', 'src/public/css/app.css')
  .js('src/resources/js/app.js', 'src/public/js/app.js')
  .disableSuccessNotifications()
