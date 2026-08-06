import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')

AOS.init({
  duration: 600,
  easing: 'ease-out-cubic',
  once: false,
  mirror: true,
  offset: 60,
})

router.afterEach(() => {
  // Re-scan the DOM for new [data-aos] elements after each route change,
  // and reset scroll-triggered state so animations replay on the new page.
  setTimeout(() => AOS.refreshHard(), 50)
})
