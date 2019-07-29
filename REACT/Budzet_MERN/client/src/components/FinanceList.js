import React from "react";
import PropTypes from "prop-types";
import LiItem from "./LiItem";
import "../styles/FinanceList.scss"
import Button from '@material-ui/core/Button';


class FinanceList extends React.Component {
    state = {
        page: 1,
        pagesCount: 0
    }
    limit = 10;

    handleClick(offset) {
        this.setState({ offset });
    }

    componentWillReceiveProps() {
        const pagesCount = Math.ceil(this.props.list.length / this.limit);
        this.setState({
            pagesCount
        })
    }

    changePage = (type) => {
        let page = this.state.page
        page = type === "inc" ? page + 1 : page - 1;
        this.setState({
            page
        })
    }

    render() {
        let showFrom = this.state.page * this.limit - this.limit;
        showFrom = this.state.page === 1 ? 0 : showFrom;
        const showTo = showFrom + this.limit
        const { props } = this

        const list = props.list.map(li => (
            <LiItem
                delete={props.delete}
                key={li.id} id={li.id}
                type={li.type} name={li.name}
                value={li.value}
                expValue={props.expValue}
                cur={props.cur}>
            </LiItem>
        )).slice(showFrom, showTo)

        const pagination = () => {
            if (!this.state.pagesCount) return null
            const { page, pagesCount } = this.state
            const btnPrev = <Button variant="contained" onClick={this.changePage.bind(null, "dec")}>Prev</Button>
            const btnNext = <Button variant="contained" className="btnNext" onClick={this.changePage.bind(null, "inc")}>Next</Button>
            return (
                <div className="pagination">
                    {page !== 1 ? btnPrev : null}
                    {page !== pagesCount ? btnNext : null}
                </div>
            )
        }
        return (
            <>
                <ul className="financeBox">
                    {pagination()}
                    <h4 className="title">{props.type === "inc" ? "INCOMES" : "EXPENSES"}</h4>
                    {list}
                </ul>
            </>
        )
    }
}
FinanceList.propTypes = {
    list: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    expValue: PropTypes.number,
    delete: PropTypes.func.isRequired
}
export default FinanceList
