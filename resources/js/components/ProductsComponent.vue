<template>
    <div>
        <div class="row">
            <div class="col-md-3 col-sm-12" v-for="(prod, $index) in products_array" v-bind:key="$index">
                <product :name="prod.title" :imgUrl="prod.url" :idProduct="prod.id"></product>
                <!-- <p>Hola</p> -->
            </div>

            <inf-load @infinite="infiniteHandler">
                <!-- <div slot="no-more">--</div> -->
                <!-- <div slot="spinner">Cargando</div> -->
                <!-- <div slot="no-result">Sin resultados</div> -->
            </inf-load>
        </div>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    Vue.use(Vuex)

    export default {
        
        data() {
            return {
                products_array: [],
                page: 0,
                category: 0
            }
        },
        methods: {
            infiniteHandler: function ($state) {
                this.page++;
                let url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + this.page;

                let prods = this;
                axios.get(url)
                    .then(function (response) {
                        // handle success
                        console.log(response);
                        // prods.products_array = response.data;
                        let posts = response.data;

                        if (posts.length) {
                            prods.products_array = prods.products_array.concat(posts);
                            if ($state != undefined) {
                                $state.loaded();
                            }
                        }
                        else {
                            if ($state != undefined) {
                                $state.complete();
                            }
                        }
                    });
           },
           goForProducts(cat) {
                this.category = cat;
                this.page = 0;
                this.products_array = [];

                this.infiniteHandler();
            }
        },
        beforeMount() {
            this.infiniteHandler();
        },
        computed: {
            ...Vuex.mapState(['isProduct'])
        },
    }
                                                                                                
</script>