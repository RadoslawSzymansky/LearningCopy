import React from "react"
import Validation from "./Validation"
import PropTypes from 'prop-types'; 
const ValidationStage1 = props => {
    const {state} = props;
    const {errors} = state;
    return (
        <>
            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-4 col-form-label">IMIĘ</label>
                <div className="col-sm-8">
                    <input onChange={props.change} value={state.userName} name="userName" type="text" className="form-control" id="inputName" placeholder="np. Jan " />
                    {errors.userName && <span className="warning">{Validation.messages.userName_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputSurname" className="col-sm-4 col-form-label">NAZWISKO</label>
                <div className="col-sm-8">
                    <input onChange={props.change} value={state.userSurname} name="userSurname" type="text" className="form-control" id="inputSurname" placeholder="np. Kowalski" />
                    {errors.userSurname && <span className="warning">{Validation.messages.userSurname_inCorrect}</span>}
                </div>
            </div>
            <button type="button" onClick={props.validate.bind(null, 1)} className="btn btn-primary btnContinue">Dalej
            </button>
        </>

    )
}
ValidationStage1.propTypes={
    state: PropTypes.object.isRequired,
    validate: PropTypes.func.isRequired
}
export default ValidationStage1