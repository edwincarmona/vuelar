<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <theform-component @new="addText"></theform-component>
            <br>
            <thetext-component 
                    v-for="(ttext, index) in ttexts" 
                    :key="ttext.id" 
                    :ttext="ttext"
                    @update="updateText(index, ttext.id, ...arguments)"
                    @delete="deleteText(index, ttext.id)"
                    >
            </thetext-component>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ttexts: []
            }
        },

        mounted() {
            axios.get('texts').then((response) => {
                this.ttexts = response.data;
            });
        },

        methods: {
            addText(params) {
                axios.post('texts', params).then((response) => {
                    const ttext = response.data;
                    this.ttexts.push(ttext);
                });
            },
            updateText(index, id, params) {
                axios.put('texts/' + id, params).then((response) => {
                    this.ttexts[index] = response.data;
                });
            },
            deleteText(index, id) {
                axios.delete('texts/' + id).then(() => {
                    this.ttexts.splice(index, 1);
                });
            },
        }
    }
</script>
