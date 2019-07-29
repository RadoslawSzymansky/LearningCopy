var ToDoContol = function (arr) {
    this.tasksArray = arr ? arr : [];
}
ToDoContol.prototype = Object.create({
    addTask: function (name) {
        var obj = {}
        obj.name = name;
        if (this.tasksArray.length === 0) {
            obj.id = this.tasksArray.length;
        } else {
            obj.id = this.tasksArray[this.tasksArray.length - 1].id + 1;
        }
        this.tasksArray.push(obj)
        return obj.id
    },
    removeTask: function (index) {
        this.tasksArray.forEach((e, i) => {
            e.id == index ? this.tasksArray.splice(i, 1) : null
        })
    },
    resetTasks: function () {
        console.log(this.tasksArray)
        this.tasksArray.length = 0;
        console.log(this.tasksArray)
    }
})