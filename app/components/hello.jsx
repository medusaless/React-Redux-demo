import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/action'


class HelloComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { number, plusOne } = this.props
        return (
            <div>
                <button onClick={plusOne}>Add</button>&nbsp;{number}
            </div>
        )
    }
}

function mapState(state) {
    return {
        number: state.num,
    }
}

function mapDispatch(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapState, mapDispatch)(HelloComponent)
