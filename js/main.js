const {createApp} = Vue;

createApp({
    data(){
        return {
            list: [
                {
                    task: "finire l'esercizio",
                    done: false
                },
                {
                    task: "seguire lezione",
                    done: false
                },
                {
                    task: "cucinare il pranzo",
                    done: false
                },
                {
                    task: "andare a fare la spesa",
                    done: false
                },
                {
                    task: "svenire nel lettoe",
                    done: false
                },
                {
                    task: "andarsi ad allenare",
                    done: false
                },

            ],
            newTask: ""
        }
    },
    methods: {
        taskStatus(i) {
            if(this.list[i].done) {
                this.list[i].done = false;
            } else {
                this.list[i].done = true;
            }
        },

        removeTask(i) {
            this.list.splice(i, 1);
        },
        
        addTask(element) {
            element = {task: element, done: false};
            this.list.push(element);
            this.newTask = "";
        }
        
    }

}).mount("#app")
