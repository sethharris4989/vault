import '~/assets/portfolio.scss'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/lhj7yye.css'
  })
}
