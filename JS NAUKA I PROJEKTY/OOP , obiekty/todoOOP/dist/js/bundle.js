/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/toDo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/interfaceControl.js":
/*!*********************************!*\
  !*** ./src/interfaceControl.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var InterControl = exports.InterControl = function InterControl(ul) {
  this.ul = ul;
};

InterControl.prototype = {
  // constructor: InterControl,
  createTaskHtml: function createTaskHtml(task, index, pos) {
    return "<li><span class=\"pos\">" + pos + ".</span> " + task + "<button data-key=\"" + index + "\">Usu\u0144</button></li>";
  },
  removeElementFromInterFace: function removeElementFromInterFace(button) {
    button.parentNode.remove();
  },
  updateSpanPos: function updateSpanPos(spans) {
    spans.forEach(function (span, index) {
      span.textContent = index + 1 + ".";
    });
  },
  clearList: function clearList() {
    this.ul.innerHTML = "";
  },
  updateTasksList: function updateTasksList(tasksArray) {
    var code = "";
    tasksArray.forEach(function (task, index) {
      code += this.createTaskHtml(task.name, task.id, ++index);
    }.bind(this));
    this.ul.innerHTML = code;
  },
  filterTasksList: function filterTasksList(tasksArray, string) {
    var code = "";
    string = string.toLowerCase();
    tasksArray.forEach(function (task, index) {
      if (task.name.toLowerCase().includes(string)) code += this.createTaskHtml(task.name, task.id, ++index);
    }.bind(this));
    this.ul.innerHTML = code;
  },
  addTask: function addTask(task, index, pos) {
    var newTask = this.createTaskHtml(task, index, pos);
    this.ul.innerHTML += newTask;
    return this.ul.querySelector('button[data-key=' + "'" + index + "'" + ']');
  }
};

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toDoControl = __webpack_require__(/*! ./toDoControl */ "./src/toDoControl.js");

var _interfaceControl = __webpack_require__(/*! ./interfaceControl */ "./src/interfaceControl.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ToDo(config) {
  var _this2 = this;

  this.toDoContol = new _toDoControl.ToDoContol(config);
  this.links = this.toDoContol.tasksArray;
  this.btnAdd = document.querySelector(".btnAdd");
  this.btnSearch = document.querySelector(".btnSearch");
  this.btnClearList = document.querySelector(".btnClear");
  this.ul = document.querySelector(".list");
  this.interControl = new _interfaceControl.InterControl(this.ul);
  this.input = document.querySelector(".toDoInput");

  this.addListener = function (id) {
    var _this = this;

    this.ul.querySelectorAll('button[data-key]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        this.interControl.removeElementFromInterFace(btn);
        this.toDoContol.removeTask(btn.dataset.key);
        this.interControl.updateSpanPos([].concat(_toConsumableArray(this.ul.querySelectorAll('span.pos'))));
      }.bind(_this));
    });
  }; //


  this.input.addEventListener('input', function (e) {
    e.target.style.border = e.target.value ? null : '1px solid red';
  });
  this.btnAdd.addEventListener('click', function (e) {
    e.preventDefault();
    this.input.style.border = e.target.value ? null : '1px solid red';
    if (!this.input.value) return;
    var id = this.toDoContol.addTask(this.input.value);
    this.interControl.addTask(this.input.value, id, this.links.length);
    this.addListener();
    this.input.value = "";
  }.bind(this));
  this.btnClearList.addEventListener('click', function (e) {
    e.preventDefault();
    this.toDoContol.resetTasks();
    this.interControl.clearList();
  }.bind(this));
  this.btnSearch.addEventListener('click', function (e) {
    if (!_this2.input.value) return;

    if (e.target.textContent === "Wyszukaj") {
      _this2.interControl.filterTasksList(_this2.links, _this2.input.value);

      e.target.textContent = "Pokaż wszystko";
    } else {
      e.target.textContent = "Wyszukaj";

      _this2.interControl.updateTasksList(_this2.links);

      _this2.addListener();

      _this2.input.value = "";
    }
  });
}

var myTodo = new ToDo();
console.log(myTodo);

/***/ }),

/***/ "./src/toDoControl.js":
/*!****************************!*\
  !*** ./src/toDoControl.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var ToDoContol = exports.ToDoContol = function ToDoContol(arr) {
  this.tasksArray = arr ? arr : [];
};

ToDoContol.prototype = Object.create({
  addTask: function addTask(name) {
    var obj = {};
    obj.name = name;

    if (this.tasksArray.length === 0) {
      obj.id = this.tasksArray.length;
    } else {
      obj.id = this.tasksArray[this.tasksArray.length - 1].id + 1;
    }

    this.tasksArray.push(obj);
    return obj.id;
  },
  removeTask: function removeTask(index) {
    var _this = this;

    this.tasksArray.forEach(function (e, i) {
      e.id == index ? _this.tasksArray.splice(i, 1) : null;
    });
  },
  resetTasks: function resetTasks() {
    console.log(this.tasksArray);
    this.tasksArray.length = 0;
    console.log(this.tasksArray);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map