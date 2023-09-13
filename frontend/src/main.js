import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '../src/store/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'


createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
library.add(faUser)