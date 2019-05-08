<template>
    <div>
        <h1>El producto</h1>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    Vue.use(Vuex)

    export default {
        methods: {
            ...Vuex.mapMutations(['changeProductView'])
        },
        mounted() {
            this.changeProductView(true);
        }
    }
</script>