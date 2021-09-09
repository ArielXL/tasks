var taskApp = new Vue({
    el: '#taskApp',
    data: {
        nameApp: 'Tasks VueJS',
        tasks: [
            { title: 'clean the house', done: false },
            { title: 'paint the window', done: false },
            { title: 'wash the shirts', done: true },
            { title: 'watering plants', done: false }
        ],
        titleTask: ''
    },
    methods: {
        deleteTask(task) {
            this.tasks.splice(
                this.tasks.indexOf(task), 1
            )
        },
        addTask() {
            if(this.titleTask !== '')
            {
                this.tasks.push({
                    title: this.titleTask,
                    done: false
                })
                this.titleTask = ''
            }
        }
    }
})