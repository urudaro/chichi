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
