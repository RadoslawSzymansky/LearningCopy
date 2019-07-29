function ToDo() {
  this.todosWrapper = document.querySelector('#todos');

  this.todosWrapper.addEventListener('click', function (e) {
    if (e.target.nodeName === 'BUTTON') {
      this.todosWrapper.removeChild(e.target.parentNode);
    }
  }.bind(this));
}

ToDo.prototype.addItem = function (message) {
  var button = document.createElement('button');
  var btnContent = document.createTextNode("X");
  var todo = document.createElement('li');
  var todoContent = document.createTextNode(message);

  button.appendChild(btnContent);
  todo.setAttribute('id', 1);
  todo.appendChild(todoContent);
  todo.appendChild(button);

  this.todosWrapper.appendChild(todo);
};

ToDo.prototype.removeAllTodos = function () {
  while (this.todosWrapper.firstChild) {
    this.todosWrapper.removeChild(this.todosWrapper.firstChild);
  }
};

var todo = new ToDo();

todo.addItem('sprzątnij pokój');
todo.addItem('ugotuj obiad');
todo.addItem('zrób pranie');

// todo.removeAllTodos();
// usage

var addTodoInput = document.getElementById('addTodo');

document.getElementById('addTodoBtn').addEventListener('click', function (e) {
  todo.addItem(addTodoInput.value);
  addTodoInput.value = "";
});

console.log(addTodoInput);