import React from "react"
import Validation from "./Validation";
import PropTypes from 'prop-types'; 

const ValidationStage3 = (props) => {
    const {state} = props;
    const {errors} = state;
    return (
        <>
            <div className="form-group row">
                <label htmlFor="emailInput" className="col-sm-3 col-form-label">Email:</label>
                <div className="col-sm-9">
                    <input onChange={props.change} value={state.email} name="email" type="email" className="form-control" id="emailInput" placeholder="jan_kowalski@gmail.com" />
                    {errors.email && <span className="warning">{Validation.messages.email_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-3 col-form-label">Hasło:</label>
                <div className="col-sm-9">
                    <input onChange={props.change} value={state.password} name="password" type="password" className="form-control" id="password" placeholder="Podaj hasło" />
                    {errors.password && <span className="warning">{Validation.messages.password_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="passwordCheck" className="col-sm-3 col-form-label">Powtórz:</label>
                <div className="col-sm-9">
                    <input onChange={props.change} value={state.passwordCheck} name="passwordCheck" type="password" className="form-control" id="passwordCheck" placeholder="Powtórz" />
                    {errors.passwordCheck && <span className="warning">{Validation.messages.passwordCheck_inCorrect}</span>}
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-12">
                    <input onChange={props.change} value={state.regAccept} className="form-check-input" name="regAccept" type="checkbox"  id="regAccept" />
                    <label htmlFor="regAccept" className="checkLabel">Czy akceptujesz regulamin</label>
                    {errors.regAccept && <p className="warning">{Validation.messages.regAccept_inCorrect}</p>}

                </div>
                <div className="col-sm-12">
                    <input className="form-check-input" name="newsAccept" type="checkbox"  id="newsAccept" />
                    <label htmlFor="newsAccept" className="checkLabel">Zapisz mnie na newsletter.</label>
                </div>
            </div>
            <div className="pagination">
                <button type="button" onClick={props.move.bind(null, 2)} className="btn btn-primary btnComeBack">Wróc
                </button>
                <button type="button" onClick={()=>{props.validate(3)}} className="btn btn-primary btnContinue">Dołącz!
                </button>
            </div>
        </>
    )
}
ValidationStage3.propTypes={
    state: PropTypes.object.isRequired,
    validate: PropTypes.func.isRequired,
    move: PropTypes.func.isRequired
}
export default ValidationStage3