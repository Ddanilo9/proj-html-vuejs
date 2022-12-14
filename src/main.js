import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

import { faArrowLeftLong, faArrowRight, faArrowRightLong, faBars, faEnvelope, faLocationDot, faMagnifyingGlass, faMinus, faPhone, faPlay, faTag } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons'

// import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
// import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
// import { faStarHalf } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faBars, faMinus, faArrowRight,faArrowLeftLong, faArrowRightLong, faFacebook,faLinkedin, faTwitter, faClock, faLocationDot, faUser, faMagnifyingGlass,
  faTag, faPhone, faEnvelope, faPlay)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
