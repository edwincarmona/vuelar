new Vue({
    el: '#crud',
    created: function () {
      this.getKeeps();
    },
    data: {
        keeps: [],
        errors: [],
        theKeep: {
            id: 0,
            keep: ''
        },
        theMethod: 'createKeep',
        keepId : 0
    },
    methods: {
        getKeeps: function() {
            let urlKeeps = 'tasks';

            axios.get(urlKeeps).then( response => {
                this.keeps = response.data;
            });
        },
        deleteKeep: function (keep) {
            let urlDelete = 'tasks/' + keep.id;

            axios.delete(urlDelete).then(response => { // eliminar
                this.getKeeps(); // listar
                toastr.success('Eliminado correctamente'); // mensaje
            });
        },
        createKeep: function() {
            this.theMethod = 'storeKeep';
            this.theKeep = {
                                id: 0,
                                keep: ''
                            };

            $('#create').modal('show');
        },
        storeKeep: function () {
            let url = 'tasks';

            axios.post(url, {
                keep: this.theKeep.keep
            }).then(response => {
                this.getKeeps();
                this.theKeep = {
                                    id: 0,
                                    keep: ''
                                };
                this.errors = [];

                $('#create').modal('hide');

                toastr.success('Tarea creada');
            }).catch(error => {
                this.errors = error.response.data;
            });
        },
        editKeep: function (keep) {
            this.theKeep = keep;
            this.theMethod = 'udpateKeep';

            $('#create').modal('show');
        },
        updateKeep: function () {
            let url = 'tasks/' + this.theKeep.id;

            axios.put(url, {
                keep: this.theKeep.keep
            }).then(response => {
                this.getKeeps();
                this.theKeep = '';
                this.errors = [];

                $('#create').modal('hide');

                toastr.success('Tarea modificada');
            }).catch(error => {
                this.errors = error.response.data;
            });
        },
        previous: function () {
            if (this.theMethod == 'udpateKeep') {
                this.updateKeep();
            }
            else {
                this.storeKeep();
            }
        }
    },
});