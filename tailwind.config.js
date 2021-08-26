module.exports = {
    purge: false,
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
            },
        }
    },
    corePlugins: {
        container: false
    },
    plugins: [
        require('@tailwindcss/typography'),
        function({addComponents}) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: '1em',
                    paddingRight: '1em',
                    '@screen sm': {
                        maxWidth: '100%',
                        paddingLeft: '2em',
                        paddingRight: '2em',
                    },
                    '@screen md': {
                        maxWidth: '100%',
                        paddingLeft: '2em',
                        paddingRight: '2em',
                    },
                    '@screen lg': {
                        maxWidth: '100%',
                        paddingLeft: '4em',
                        paddingRight: '4em',
                    },
                    '@screen xl': {
                        maxWidth: '1600px',
                        paddingLeft: '6em',
                        paddingRight: '6em',
                    },
                }
            })
        }
    ],
}
