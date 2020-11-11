Vue.config.devtools = true;

var app = new Vue(
    {
        el: '#root',
        data: {
            newTodo: '',
            indice: 0,
            todo: [
                "Affettati",
                "Formaggi",
                "Pane"
            ]
        },
        methods: {
            addTodo: function () {

                var value = this.newTodo && this.newTodo.trim();

                if (!value) {
                    return;
                }

                this.todo.push(value);

                this.newTodo = "";
            },
            rimuovi_todo: function (todo) {
                console.log(todo);
                this.todo.slice(this.todo.indexOf(todo), 1);
            }
        }
    }
);
