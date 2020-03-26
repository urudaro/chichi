module.exports = {
  title: 'Theme',
  description: 'Diversidades',
  base: '/',
  dest: 'blog/.vuepress/dist/',
  theme: 'ououe',
  themeConfig: {
    cover: '/pueblo.jpg',
    logo: '/chichi-t-short.png',
    backgroundImage: false,
    nav: [
      { text: 'Posts', link: '/posts/' },
      { text: 'Claves', link: '/tag/' },
      { text: 'Temas', link: '/category/' },
      { text: 'Cerro Limón', link: '/category/Cerro Limón/' },
      { text: '¿Qué es ésto?', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/tolking' }
    ]
  },
  plugins: [
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
  ]
}
