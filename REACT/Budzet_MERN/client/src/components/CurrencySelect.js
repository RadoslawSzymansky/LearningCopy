import React from 'react';
const CurrencySelect = props => {
    return (
        <div className="currencySelect" >
            <label htmlFor="curChoice" > Show in: </label>
            <select name="currencyChoice"
                id="curChoice"
                onChange={props.setCurrency}
                value={props.currentCurrency} >
                <option value="PLN" > PLN </option>
                <option value="GBP" > GBP </option>
                <option value="USD" > USD </option>
                <option value="EUR" > EUR </option>
            </select >
        </div>
    )
}
export default CurrencySelect;