<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">

                <div class="card mb-3 mt-3" v-for="item in list" v-bind:key="item.id">
                    <router-link 
                        class="card-header"
                        :to="{name: 'post', params: {slug: item.slug}}"
                        v-text="item.title"
                    ></router-link>

                    <div class="card-body">
                        <p class="card-text" v-text="item.body"></p>
                    </div>

                </div>

                <inf-load name="inf" @infinite="infiniteHandler">
                    <!-- <div slot="no-more">--</div> -->
                    <!-- <div slot="spinner">Cargando</div> -->
                    <div slot="no-result">Sin resultados</div>
                </inf-load>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       data() {
           return {
               list: [],
               page: 0
           }
       },
       methods: {
           infiniteHandler: function ($state) {
               this.page++;
               let url = 'api/posts?page=' + this.page;

               axios.get(url).then(response => {
                   let posts = response.data.data;

                   if (posts.length) {
                       this.list = this.list.concat(posts);
                       $state.loaded();
                   }
                   else {
                       $state.complete();
                   }
               });
           }
       },
    }
</script>
