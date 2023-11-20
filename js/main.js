const {createApp} = Vue;

createApp({
    data(){
        return {
            list: [
                {
                    task: "finire l'esercizio",
                    completed: true
                },
                {
                    task: "seguire lezione",
                    completed: false
                },
                {
                    task: "cucinare il pranzo",
                    completed: false
                },
                {
                    task: "andare a fare la spesa",
                    completed: true
                },
                {
                    task: "svenire nel lettoe",
                    completed: false
                },
                {
                    task: "andarsi ad allenare",
                    completed: false
                },

            ],
            newTask: ""
        }
    },
    methods: {
        taskStatus(condition) {
            return (condition) ? "barred" : "";
        },
        removeTask(index) {
            this.list.splice(index, 1);
        },
        toggleCompletion(index) {
            this.list[index].completed = !this.list[index].completed
        },
        addTask() {
            this.list.push({task: this.newTask, completed: false})
        if (this.newTask == "") {
            this.list.pop({task: this.newTask, completed: false})
        }
        this.newTask = ""
        
        }
    }
}).mount("#app")
