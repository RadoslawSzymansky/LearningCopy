import React, { Component } from 'react';
import './AddTask.css'
class AddTask extends Component {
    state = {
        text: "",
        checked: false,
        date: new Date().toISOString().slice(0, 10),
    }
    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleCheck = (e) => {
        this.setState((prev) => ({
            checked: !prev.checked
        }))
    }
    handleClick = () => {

        const { text, checked, date } = this.state;
        if (!(text.length > 3)) alert('za krotka nazwa')
        const add = this.props.addTask(text, checked, date)
        if (add) {
            this.setState({
                date: new Date().toISOString().slice(0, 10),
                text: "",
                checked: false
            })
        }
    }

    render() {
        const minDate = new Date().toISOString().slice(0, 10)
        let maxDate = minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate += "-12-31"
        return (
            <div className="form">
                <input
                    onChange={this.handleText}
                    type="text"
                    placeholder="dodaj zadanie"
                    value={this.state.text}
                />
                <input type="checkbox"
                    onChange={this.handleCheck}
                    checked={this.state.checked}
                    id="important" />
                <label htmlFor="important">
                    Piorytet
                </label>
                <br />
                <label htmlFor="date">
                    Do kiedy zrobić
                </label>
                <input onChange={this.handleDate} type="date" id="date" min={minDate} max={maxDate} value={this.state.date} />
                <br />
                <button onClick={this.handleClick}>Dodaj</button>
            </div >
        )
    }

}
export default AddTask