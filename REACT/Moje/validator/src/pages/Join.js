import React from "react";
import "../styles/Join.scss";
import { Prompt } from "react-router-dom"
import ValidationStage1 from "../components/ValidationStage1"
import ValidationStage2 from "../components/ValidationStage2"
import ValidationStage3 from "../components/ValidationStage3"
import Validation from "../components/Validation"

class Join extends React.Component {
    state = {
        activeStage: 1,
        userName: "",
        userSurname: "",
        licenseYears: 0,
        email: "",
        password: "",
        joinReasonMsg: "",
        gender: "",
        regAccept: false,
        newsAccept: false,
        passwordCheck: "",
        errors: {
            userName: false,
            userSurname: false,
            email: false,
            password: false,
            passwordCheck: false,
            licenseYears: false,
            joinReasonMsg: false,
            gender: false,
            regAccept: false
        },
        message: false
    }
    isDone = false;
    submitForm = () => {
        console.log('tu mozna zaczać wysylanie danych, walidacja po stronie klienta przebigla pomyslnie');
        console.log(' oraz wyczyscic state do poczatkowych wartosci po wysaniu danych')
        this.isDone = true
        this.props.history.push("/joinSucces")
        setTimeout(() => {
            this.props.history.push("/")
        }, 4000)
    }
    validateStage = stage => {
        const validation = Validation.validate(this.state, stage)
        if (validation.correct) {
            this.setState({
                correct: false,
                errors: {
                    userName: false,
                    userSurname: false,
                    email: false,
                    password: false,
                    passwordCheck: false,
                    accept: false,
                    licenseYears: false,
                    joinReasonMsg: false,
                    gender: false,
                    regAccept: false
                },
            })
            if (stage !== 3) {
                this.move(stage + 1)
            } else {
                this.submitForm()
            }
        } else {
            this.setState({
                errors: {
                    userName: !validation.userName,
                    userSurname: !validation.userSurname,
                    email: !validation.email,
                    password: !validation.password,
                    passwordCheck: !validation.passwordCheck,
                    licenseYears: !validation.licenseYears,
                    joinReasonMsg: !validation.joinReasonMsg,
                    gender: !validation.gender,
                    regAccept: !validation.regAccept
                }
            })
        }
    }
    handleInputChange = e => {
        const name = e.target.name
        const type = e.target.type
        const value = type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            [name]: value
        })
    }
    move = num => {
        this.setState({
            activeStage: num
        })
    }
    render() {
        const { activeStage, userName } = this.state;
        return (
            <>
                <form id="joinClub" action="submit">
                    <h3 className="mb-5">Wypełnij formularz</h3>
                    {activeStage === 1 ? <ValidationStage1 change={this.handleInputChange} state={this.state} validate={this.validateStage} /> : null}
                    {activeStage === 2 ? <ValidationStage2 change={this.handleInputChange} state={this.state}
                        validate={this.validateStage} move={this.move} /> : null}
                    {activeStage === 3 ? <ValidationStage3 change={this.handleInputChange} state={this.state} validate={this.validateStage} move={this.move} /> : null}
                    <Prompt
                        when={userName.length > 0 && this.isDone}
                        message={"Czy napewno chcesz wyjść? Jeżeli opuścisz tę stonę zapisane dane zostaną utracone.."}
                    ></Prompt>
                </form>

            </>
        )
    }
}
export default Join