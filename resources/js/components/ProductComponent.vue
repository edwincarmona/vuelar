<template>
    <div>
        <div class="card mt-3">
            <img class="card-img-top" :src="imgUrl" alt="">
            <div class="card-body">
                <h4 class="card-title">{{ name }}</h4>
                <a @click="changeProductView(true)" :href="'./products/' + idProduct" class="card-text">lorem</a>
            </div>
        </div>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    Vue.use(Vuex)

    export default {
        props: {
            idProduct: 0,
            name: 0,
            imgUrl: 0
        },
        methods: {
            ...Vuex.mapMutations(['changeProductView'])
        },
    }
</script>