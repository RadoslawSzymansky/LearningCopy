import React from 'react';
import './App.css';

class Form extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,
    errors: {
      username: false,
      email: false,
      password: false,
      accept: false
    },
    message: false

  }
  messages = {
    username_inCorrect: "Niepoprawne imie. Minimum 10 znakow",
    email_inCorrect: "niepowany email",
    password_inCorrect: "min length 8",
    checkbox_unAccept: "You didnt accept rules",
  }
  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    const type = e.target.type
    if (type === "checkbox") {
      const checked = e.target.checked
      this.setState({
        [name]: checked
      })
      return
    }
    this.setState({
      [name]: value
    })
  }
  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;
    if (this.state.username.length > 10 && this.state.username.indexOf(" ") === -1) {
      username = true
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true
    }
    if (this.state.password.length >= 8) {
      password = true

    }
    if (this.state.accept) {
      accept = true
    }
    if (username && email && password && accept) {
      correct = true
    }
    return ({
      username,
      password,
      accept,
      email,
      correct
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const validation = this.formValidation();
    console.log(validation)
    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        password: "",
        accept: false,
        message: true,
        errors: {
          username: false,
          email: false,
          password: false,
          accept: false
        }
      })
      console.log('wyslano formuarz')
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept
        }
      })
    }
  }
  componentDidUpdate() {
    if (this.state.message) {
      setTimeout(() => {
        this.setState({
          message: false
        })
      }, 2000)
    }
  }
  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Twoje imie:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {this.state.errors.username && <span>{this.messages.username_inCorrect}</span>}
          </label>
          <br />
          <label htmlFor="email">
            Twoj email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />{this.state.errors.email && <span>{this.messages.email_inCorrect}</span>}
          </label>
          <label htmlFor="password">
            Haslo:
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />{this.state.errors.password && <span>{this.messages.password_inCorrect}</span>}
          </label>
          <label htmlFor="accept">
            Wyrażam zgode
            <input
              type="checkbox"
              name="accept"
              id="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />{this.state.errors.accept && <span>{this.messages.checkbox_unAccept}</span>}
          </label>
          <button >Zapisz sie</button>
        </form>
        {this.state.message && <p>Wyslano formularz</p>}
      </>
    );
  }
}

export default Form;
