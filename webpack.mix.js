let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
let autoprefixer = require('autoprefixer');
require('laravel-mix-purgecss');

// mix.js('src/app.js', 'web/dist/');

mix.sass('./src/app.scss', '/dist/')
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
        content: ['./templates/**/*.twig','./src/app.scss'],
        safelist: []
    })
    .setPublicPath('web');

mix.copy('./src/images/**/*', 'web/dist/images/');

mix.copy('./src/fonts/**/*', 'web/dist/fonts')

mix.browserSync({
    proxy: 'http://craft-boilerplate.local',
    files: [
        'config/project',
        'web/dist/**/*.*',
        'templates/**/*.twig'
    ]
});
