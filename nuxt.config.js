module.exports = {
    modules: [
        'bootstrap-vue/nuxt',

        // Or if you have custom bootstrap CSS...
        ['bootstrap-vue/nuxt', {css: false}],
    ],
    head: {
        title: '姚君荣的个人博客',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Global CSS
    */
    css: ['~/assets/css/main.css'],
    /*
    ** Add axios globally
    */
    build: {
        vendor: ['axios', 'element-ui'],
        babel: {
            plugins: [['component', [{
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk'
            }]]]
        },
    },
    plugins: ['~plugins/element-ui']
};
