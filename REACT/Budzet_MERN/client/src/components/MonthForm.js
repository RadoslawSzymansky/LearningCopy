import React from "react";
import "../styles/ViewSelect.scss"
import PropTypes from "prop-types"
class ViewSelect extends React.Component {
    state = {
        selectValue: "all"
    }
    handleChange = async e => {
        await this.setState({
            selectValue: e.target.value
        })
        this.props.change(this.state.selectValue)
        // lub z dokumentacji :
        // this.setState({
        //     selectValue: e.target.value
        // }, () => {
        //     this.props.change(this.state.selectValue)
        // })
        // callback fn wykona sie dopiero po zmienionym state
    }
    render() {
        const { months } = this.props;
        const options = months.map((month, i) => (<option key={i} value={i}>{month}</option>))
        return (
            <form className="monthSelect">
                <label htmlFor="monthSelect">Period</label>
                <select name="monthSelect" id="monthSelect" onChange={e => this.handleChange(e)} value={this.state.selectValue}>
                    <option value="all">All</option>
                    {options}
                </select>
            </form>
        )
    }
}
export default ViewSelect
ViewSelect.propTypes = {
    change: PropTypes.func.isRequired,
    months: PropTypes.array.isRequired
}