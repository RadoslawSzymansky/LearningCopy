import React from "react";
import "../styles/Header.scss"
import PropTypes from "prop-types"
const Header = props => {
    const { expPercent, exp, inc, cash, month } = props
    const year = new Date().getFullYear()
    return (
        <header className="wallet">
            <h3>Avaible Budget in <span className="currentDate">{month} {year}</span></h3>
            <h3 style={cash > 0 ? { color: "darkcyan", fontSize: 42 } : { color: "red" }}>{cash} <span className="cur">{props.cur}</span></h3>
            <div className="stateBelt income">
                <p className="desc">INCOME</p><p className="amount">+ {inc} <span className="cur">{props.cur}</span></p>
            </div>
            <div className="stateBelt expense">
                <p className="desc">EXPENSES</p><p className="amount">- {exp} <span className="cur">{props.cur}</span></p>
                <span className="expensesPercent">{expPercent <= 0 ? "0" : expPercent}%</span>
            </div>
        </header>
    )
}
export default Header
Header.propTypes = {
    cash: PropTypes.number.isRequired,
    expPercent: PropTypes.string.isRequired,
    inc: PropTypes.number.isRequired,
    exp: PropTypes.number.isRequired,
}