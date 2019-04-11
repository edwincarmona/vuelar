require('./bootstrap');

window.Vue = require('vue');
import InfiniteLoading from 'vue-infinite-loading';

Vue.component('app', require('./components/AppComponent.vue').default);
Vue.component('posts', require('./components/PostsComponent.vue').default);
Vue.component('inf-load', InfiniteLoading);

import router from './routes';

const app = new Vue({
    el: '#app',
    router
});
