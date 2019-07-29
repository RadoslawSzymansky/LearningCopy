import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="error message ui">
          <div className="header">{error}</div>
        </div>
      )
    } else {
      return null
    }

  }

  renderInput = ({ input, label, meta }) => {
    const clasName = `field ${meta.error && meta.touched ? 'error' : ""}`

    return (
      <div className={clasName}>
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render() {
    console.log(this.props)
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button type="submit" className="ui button primary">Submit</button>
      </form>
    );
  };
};

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must put title';
  };

  if (!formValues.description) {
    errors.description = 'You must put descripiton';
  };

  return errors;
};
export default reduxForm({
  form: 'streamForm',
  validate: validate,
})(StreamForm);


