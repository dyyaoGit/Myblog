module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '姚君荣的个人博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css', 'iview/dist/styles/iview.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'iview']
  },
  plugins: ['~plugins/iview']
}