import React from "react"
import { Prompt } from "react-router-dom"
import '../styles/Kontakt.css'
class Kontakt extends React.Component {
    state = {
        value: ""
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz Do nas</h3>
                    <textarea onChange={this.handleChange} value={this.state.value}></textarea>
                    <button className="kontaktBTN">Wyslij</button>
                </form>
                {/* {propmpt jest sprawdzany w chiwli orzejscia do nowefgo adresu } */}
                <Prompt
                    when={Boolean(this.state.value.length)}
                    message={"Czy napewno, masz wiadomosc napsiana?"}
                ></Prompt>
            </div>
        )
    }
}
export default Kontakt