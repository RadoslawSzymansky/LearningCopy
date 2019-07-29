import React from 'react'
import PropTypes from 'prop-types'
class Form extends React.Component{
    state={
        name: ""
    }
    handleChange =(e)=>{
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        if(this.state.name.length < 5) return alert('Conajmije 5')
        this.props.addTask(this.state.name)
        this.setState({
            name: ""
        })
    }
    render(){
        return(
            <form className="toDoForm" onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleChange}
                value={this.state.name}
                type="text" 
                className="toDoInput" 
                placeholder="Dodaj zadanie"/>
                <button type="submit" className="btnAdd">Dodaj</button>
                <button type="button" className="btnAdd">Wyczyść listę</button>
            </form>
        )
    }
}
export default Form
Form.propTypes ={
    addTask: PropTypes.func
}