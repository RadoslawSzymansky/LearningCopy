import React from "react"
import Validation from "./Validation"
import PropTypes from 'prop-types'; 
const ValidationStage2 = props => {
    const {state} = props;
    const {errors} = state;

    return (
        <>
            <div className="form-group row">
                <label htmlFor="inputLicense" className="col-sm-4 col-form-label">Prawo jazdy:</label>
                <div className="col-sm-8">
                    <input onChange={props.change} value={state.licenseYears} name="licenseYears" type="number" className="form-control" id="inputLicense" placeholder="Od ilu lat?" />
                    {errors.licenseYears && <span className="warning">{Validation.messages.licenseYears_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="message" className="col-sm-4 col-form-label">Wiadomość</label>
                <div className="col-sm-8">
                    <textarea onChange={props.change} value={state.joinReasonMsg} name="joinReasonMsg" className="form-control" id="message" placeholder="Napisz dlaczego chcesz dołaczyć do naszego klubu" rows="3"></textarea>
                    {errors.joinReasonMsg && <span className="warning">{Validation.messages.joinReasonMsg_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="gender" className="col-sm-4 col-form-label">PŁEĆ</label>
                <div className="col-sm-8">
                    <select onChange={props.change} value={state.gender} className="form-control form-control-sm" name="gender" id="gender">
                        <option value="start">Wybierz</option>
                        <option value="male">Mężczyzna</option>
                        <option value="female">Kobieta</option>
                    </select>
                    {errors.gender && <span className="warning">{Validation.messages.gender_inCorrect}</span>}

                </div>
            </div>
            <div className="pagination">
                <button type="button" onClick={props.move.bind(null, 1)} className="btn btn-primary btnComeBack">Wróc</button>
                <button type="button" onClick={props.validate.bind(null, 2)} className="btn btn-primary btnContinue">Dalej</button>
            </div>
        </>
    )
}
ValidationStage2.propTypes={
    state: PropTypes.object.isRequired,
    validate: PropTypes.func.isRequired,
    move: PropTypes.func.isRequired
}
export default ValidationStage2