// Higher order functions


// function add(x, y) {
//     return x + y
// }

// function makeAdder(x, addReference) {
//     return function (y) {
//         return addReference(x, y)
//     }
// }

// const addFive = makeAdder(5, add)
// const addTen = makeAdder(10, add)
// const addTwenty = makeAdder(20, add)

// addFive(10) // 15
// addTen(10) // 20
// addTwenty(10) // 30




// // Higer order componnets react
// function higherOrderComponent(Component) {
//     return class extends React.Component {
//         render() {
//             return <Component />
//         }
//     }
// }

/// 

// function withHover(Component, propName = 'hovering') {
function withHover(Component, propName = 'hovering') {
    return class WithHover extends React.Component {
        state = { hovering: false }
        mouseOver = () => this.setState({ hovering: true })
        mouseOut = () => this.setState({ hovering: false })
        render() {
            console.log(this.props) // { height: "16px" }

            const props = {
                [propName]: this.state.hovering,
                ...state
            }

            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Component {...props} />
                </div>
            );
        }       
    }
}

function Info({ showTooltip, height }) {
    return (
        <>
            {showTooltip === true
                ? <Tooltip id={this.props.id} />
                : null}
            <svg
                className="Icon-svg Icon--hoverable-svg"
                height={height}
                viewBox="0 0 16 16" width="16">
                <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
        </>
    )
}

// const InfoWithHover = withHover(Info, 'showTooltip')

//
const InfoWithHover = withHover(Info)


// tutaj ustalamy propsy
return <InfoWithHover height="16px" />