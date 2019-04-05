<template>
    <div class="card">
        <div class="card-header">Este cuadro es para ingresar textos</div>

        <div class="card-body">
            <form action="" v-on:submit.prevent="newTText()">
                <div class="form-group">
                    <label for="ttext">Introduce el texto</label>
                    <input type="text" name="ttext" id="ttext" class="form-control" v-model="description">
                </div>
                <button type="submit" class="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                description: ''
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            newTText() {
                const params = {
                    description: this.description
                };

                this.$emit('new', params);
                this.description = '';
            }
        },
    }
</script>
