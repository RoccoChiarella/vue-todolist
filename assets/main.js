Vue.config.devtools = true;

var app = new Vue(
    {
        el: '#root',
        data: {
            nuovoTodo: '',
            indice: 0,
            todo: [
                "Affettati",
                "Formaggi",
                "Pane"
            ]
        },
        methods: {
            aggiungiTodo: function () {
                var value = this.nuovoTodo && this.nuovoTodo.trim();

                if (!value) {
                    return;
                }

                this.todo.push(value);

                this.nuovoTodo = "";
            },
            rimuoviTodo: function (todo) {
                this.todo.splice(this.todo.indexOf(todo), 1);
            }
        }
    }
);
