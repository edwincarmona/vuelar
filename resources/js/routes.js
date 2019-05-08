import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/products',
            component: require('./components/ProductsComponent').default    
        },
        {
            path: './:slug',
            name: 'post',
            component: require('./views/Post').default,
            props: true
        },
        {
            path: '*',
            component: require('./views/404').default
        }
    ],
    mode: 'history'
});
