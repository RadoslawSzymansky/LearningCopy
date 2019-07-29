(function () {
  'use strict';
  var config = {};
  var updateMessages = {
    required: function (input) {
      return input.value === "" ? "Pole jest wymagane" : null;
    },
    min5Letters: function (input) {
      return input.value.length > 0 && input.value.length < 5 ? "Pole powinno składać się przynajmniej z 5 znaków" : null;
    },
    max20Letters: function (input) {
      return input.value.length > 0 && input.value.length > 20 ? "Pole powinno przekraczać 20 znaków" : null;
    }
  };


  function initForms() {
    console.log('fn init')
    var forms = document.getElementsByTagName('form');
    forms = Array.prototype.slice.call(forms);

    forms.forEach(function (form) {
      var node = form.attributes['name'].nodeValue;
      var children = Array.prototype.slice.call(form.children);
      if (!config[node]) config[node] = {};
      config[node].isSetSubmitted = false;
      config[node].inputs = _filterInputs(children);
      config[node].submitBtn = _findSubmitBtn(children);
      config[node].inputsToValidate = _setValidators(children);
      _setWatcherForInput(config[node].inputsToValidate, config[node].isSetSubmitted);
      _createValidationPlaceholderForInput(config[node].inputsToValidate);
    });
  }

  // helpers
  function _filterInputs(formChildren) {
    console.log('fn filter')

    return formChildren.filter(function (child) {
      return child.nodeName === "INPUT";
    });

  }

  function _findSubmitBtn(formChildren) {
    console.log('fn submit')

    return formChildren.find(function (child) {
      return child.nodeName === 'BUTTON' && child.type === 'submit';
    })
  }

  function _setValidators(formChildren) {
    console.log('set validators')

    return formChildren
      .filter(function (input) {
        return input.nodeName === "INPUT";
      })
      .map(function (input) {
        return {
          element: input,
          validators: []
        }
      })
      .map(function (input) {
        if (input.element.dataset.validators) {
          var validators = input.element.dataset.validators.split(", ");
          input.validators = input.validators.concat(validators);
        }
        console.log(input)
        return input
      });

  }

  function _createValidationPlaceholderForInput(inputs) {
    console.log('create validationplaceHolder')
    inputs.forEach(function (input) {
      var message = document.createElement('div');
      message.classList.add("validation-hidden");
      input.element.parentNode.insertBefore(message, input.element.nextSibling);
    });
  }

  function _setWatcherForInput(inputs, flag) {
    console.log('set watcher');

    inputs.forEach(function (input) {
      input.element.addEventListener('keyup', function (e) {
        var message = checkInputStatus(e.target, input.validators);
        e.target.nextSibling.innerHTML = message || "";
        console.log(message, flag);
        if (flag) {
          (message === null) ?
          input.element.nextSibling.classList.remove('validation-active'): input.element.nextSibling.classList.add('validation-active');
        }
      });
    });
  }

  function checkInputStatus(input, validators) {
    console.log('checkinputstatus')

    var answer;
    var flag = false;
    validators.forEach(function (validator) {
      if (!updateMessages[validator]) {
        console.error('Brak walidatora o nazwie ' + validator);
      }
      if (!flag) {
        answer = updateMessages[validator](input);
        if (answer !== null) flag = true;
      }
    });
    return answer;
  }

  function _showErrors(inputs) {
    inputs.forEach(function (input) {
      var message = checkInputStatus(input.element, input.validators);
      input.element.nextSibling.innerHTML = message || "";
      input.element.nextSibling.classList.add('validation-active');
    })
  }

  // validate inputs
  function validate(form) {
    form.isSetSubmitted = true;
    _showErrors(form.inputsToValidate);
  }

  initForms();

  // execute custom function for any form
  config.register.submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    validate(config.register);

    // console.log("validate register form");
    // console.log(config);
  });

  config.login.submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    validate(config.login);

    // console.log("validate login form");
    // console.log(config);
  });
  console.log(config)
})();