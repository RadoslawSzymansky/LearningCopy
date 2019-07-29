function ToDo(config) {
    this.toDoContol = new ToDoContol(config);
    this.links = this.toDoContol.tasksArray;
    this.btnAdd = document.querySelector(".btnAdd");
    this.btnSearch = document.querySelector(".btnSearch");
    this.btnClearList = document.querySelector(".btnClear");
    this.ul = document.querySelector(".list");
    this.interControl = new InterControl(this.ul);
    this.input = document.querySelector(".toDoInput");
    this.addListener = function (id) {
        this.ul.querySelectorAll('button[data-key]').forEach(btn => {
            btn.addEventListener('click', function () {
                this.interControl.removeElementFromInterFace(btn);
                this.toDoContol.removeTask(btn.dataset.key)
                this.interControl.updateSpanPos([...this.ul.querySelectorAll('span.pos')])
            }.bind(this))
        })
    }
    this.input.addEventListener('input', e => {
        e.target.style.border = e.target.value ? null : '1px solid red'
    })
    this.btnAdd.addEventListener('click', function (e) {
        e.preventDefault();
        this.input.style.border = e.target.value ? null : '1px solid red'
        if (!this.input.value) return;
        var id = this.toDoContol.addTask(this.input.value);
        this.interControl.addTask(this.input.value, id, this.links.length);
        this.addListener()
        this.input.value = ""
    }.bind(this));
    this.btnClearList.addEventListener('click', function (e) {
        e.preventDefault()
        this.toDoContol.resetTasks();
        this.interControl.clearList();
    }.bind(this));
    this.btnSearch.addEventListener('click', (e) => {
        if (!this.input.value) return;
        if (e.target.textContent === "Wyszukaj") {
            this.interControl.filterTasksList(this.links, this.input.value);
            e.target.textContent = "Pokaż wszystko"
        } else {
            e.target.textContent = "Wyszukaj";
            this.interControl.updateTasksList(this.links);
            this.addListener()
            this.input.value = ""
        }
    })
}
class Aha{
    constructor(){
        this.p = 'x'
    }
    static changeP(){
        this.p ="a"
    }
}

var myTodo = new Aha();
var myTodo2 = new Aha()
console.log(myTodo, myTodo2)

Aha.changeP()
console.log(myTodo, myTodo2)