const {createApp} = Vue;

createApp({
    data(){
        return {
            list: [
                {
                    task: "finire l'esercizio",
                },
                {
                    task: "seguire lezione",
                },
                {
                    task: "cucinare il pranzo",
                },
                {
                    task: "andare a fare la spesa",
                },
                {
                    task: "svenire nel lettoe",
                },
                {
                    task: "andarsi ad allenare",
                },

            ],
            newTask: ""
        }
    },
    methods: {
        removeTask(index) {
            this.list.splice(index, 1);
        },
        addTask() {
            this.list.push({task: this.newTask})
        if (this.newTask == "") {
            this.list.pop({task: this.newTask})
        }
        this.newTask = ""
        
        }
    }
}).mount("#app")
