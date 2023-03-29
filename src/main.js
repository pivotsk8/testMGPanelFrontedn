import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt, faLocationDot, faPhone, faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faLocationDot, faAt, faPhone)

const app = createApp(App).use(Oruga).component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
