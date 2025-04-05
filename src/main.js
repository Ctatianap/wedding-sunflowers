import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faUserSecret, 
    faVolumeXmark, 
    faMusic, 
    faHeart,
    faChampagneGlasses
 } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(
    faUserSecret,
    faVolumeXmark,
    faMusic,
    faHeart,
    faChampagneGlasses
)

const app = createApp(App)
app.use(ElementPlus)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
