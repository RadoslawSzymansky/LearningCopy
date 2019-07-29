var InterControl = function (ul) {
    this.ul = ul;
}
InterControl.prototype = {
    constructor: InterControl,
    createTaskHtml: function (task, index, pos) {
        return `<li><span class="pos">${pos}.</span> ${task}<button data-key="${index}">Usuń</button></li>`;
    },
    removeElementFromInterFace: function (button) {
        button.parentNode.remove();
    },
    updateSpanPos: function (spans) {
        spans.forEach((span, index) => {
            span.textContent = index + 1 + "."
        })
    },
    clearList: function () {
        this.ul.innerHTML = ""
    },
    updateTasksList: function (tasksArray) {
        var code = "";
        tasksArray.forEach(function (task, index) {
            code += this.createTaskHtml(task.name, task.id, ++index);
        }.bind(this));
        this.ul.innerHTML = code;
    },
    filterTasksList: function (tasksArray, string) {
        var code = "";
        string = string.toLowerCase();
        tasksArray.forEach(function (task, index) {
            if (task.name.toLowerCase().includes(string)) code += this.createTaskHtml(task.name, task.id, ++index);
        }.bind(this));
        this.ul.innerHTML = code;
    },
    addTask: function (task, index, pos) {
        var newTask = this.createTaskHtml(task, index, pos);
        this.ul.innerHTML += newTask;
        return this.ul.querySelector('button[data-key=' + "'" + index + "'" + ']');
    },
}