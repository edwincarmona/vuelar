<template>
    <div class="card">
        <div class="card-header">Publicado: {{ ttext.created_at }}</div>

        <div class="card-body">

            <p v-if="!editMode">{{ ttext.description }}</p>

            <input v-else type="text" class="form-control" v-model="ttext.description">

        </div>

        <div class="card-footer">

            <button v-if="editMode" class="btn btn-info" v-on:click="onClickUpdate">
                Guardar cambios
            </button>

            <button v-else class="btn btn-info" v-on:click="onClickEdit">
                Editar
            </button>

            <button class="btn btn-danger" v-on:click="onClickDelete">
                Borrar
            </button>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['ttext'],
        data() {
            return {
                editMode: false
            }
        },
        mounted() {
            console.log('Component mounted.')
        },

        methods: {
            onClickDelete() {
                this.$emit('delete');
            },
            onClickEdit() {
                this.editMode = true;
            },
            onClickUpdate() {
                this.editMode = false;
                this.$emit('update', this.ttext);
            }
        },
    }
</script>
