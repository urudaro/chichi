const extendsNetworks = {"facebook": {
    "sharer": "https://www.facebook.com/sharer/sharer.php?href=@url&title=@title&description=@description&quote=@quote&hashtag=@hashtags",
    "type": "popup",
    "color": "#3b5998",
    "icon": "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M960 113.4v797c0 27.4-22.2 49.4-49.4 49.4H682.2V613h116.4L816 477.8H682v-86.4c0-39.2 10.8-65.8 67-65.8h71.6v-121c-12.4-1.6-54.8-5.4-104.4-5.4-103.2 0-174 63-174 178.8v99.8H425.4V613h116.8v347H113.4C86.2 960 64 937.8 64 910.6V113.4C64 86.2 86.2 64 113.4 64h797c27.4 0 49.6 22.2 49.6 49.4z\"/></svg>"
  }
}

module.exports = {
  title: 'Chichirimochi',
  description: 'Diversidades',
  base: '/',
  dest: 'blog/.vuepress/dist/',
  theme: 'ououe',
  themeConfig: {
    cover: '/hondonero-panoramica-2.jpg',
    logo: '/chichirimochi-banner-stroke.png',
    backgroundImage: false,
    nav: [
      { text: 'Inicio', link: '/' },
			{text: 'Novedades', link: '/posts/'},
			{text: 'Temas', link: '/category/'},
			{text: 'Palabras Claves', link: '/tag/'},
      { text: 'Cerro Limón', link: '/category/Cerro Limón/' },
      { text: '¿Qué es esto?', link: '/about/'}
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/tolking' }
    ]
  },
  plugins: [
    ['social-share',
      {
        networks: ['twitter', 'facebook', 'reddit', 'telegram', 'whatsapp'],
        extendsNetworks,
      },
    ],
    [
    '@vuepress/google-analytics',
      {
        ga: 'UA-7213417-4'
      }
    ],
    // permalink for posts
    ['blog-multidir', {
      postsDir: {
        posts: 'posts/:year/:month/:day/:slug'
      }
    }],
    // add vuepress-plugin-container
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'tip',
      before: info => `<div class="tip"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'warning',
      before: info => `<div class="warning"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'danger',
      before: info => `<div class="danger"><p class="title">${info}</p>`,
      after: '</div>'
    }]
  ],
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ]
}
