require('./bootstrap');

window.Vue = require('vue');
import InfiniteLoading from 'vue-infinite-loading';

import Vuex from 'vuex'
Vue.use(Vuex)

Vue.component('products', require('./components/ProductsComponent.vue').default);
Vue.component('product', require('./components/ProductComponent.vue').default);
Vue.component('the-product', require('./components/TheProductComponent.vue').default);
Vue.component('inf-load', InfiniteLoading);

const store = new Vuex.Store({
  state: {
    isProduct: false
  },
  mutations: {
    changeProductView(state, bProduct) {
      state.isProduct = bProduct;
    }
  }
});

// import router from './routes';

var app = new Vue({
    el: '#products',
    store,
    data: {
      message: 'Hello Vue!'
    },
    methods: {
      goForProducts(cat) {
        if (this.$refs.prods != undefined) {
          this.$refs.prods.goForProducts(cat);
        }
      },
      goCategory(cat) {
        if (store.state.isProduct) {
          window.location = "./";
        }
        else {
          this.goForProducts(cat);
        }
      },
      ...Vuex.mapMutations(['changeProductView'])
    },
    computed: {
      ...Vuex.mapState(['isProduct'])
    },
});
