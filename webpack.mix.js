let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
let autoprefixer = require('autoprefixer');
require('laravel-mix-purgecss');
require('dotenv').config()

mix.setPublicPath('/');

mix.js('./src/app.js', './web/assets/').extract(['alpinejs']);

mix.sass('./src/app.scss', './web/assets/')
    .version()
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.config.js'),
            autoprefixer(),
        ],
    })
    .purgeCss({
        enabled: mix.inProduction(),
        content: ['./templates/**/*.twig', './src/app.scss'],
        safelist: []
    })

mix.copy('./src/images/**/*', './web/assets/images/');

mix.copy('./src/fonts/**/*', './web/assets/fonts')

mix.browserSync({
    proxy: process.env.PRIMARY_SITE_URL,
    files: [
        'web/assets/**/*.*',
        'templates/**/*.twig'
    ]
});
