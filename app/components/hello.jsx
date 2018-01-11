import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/action'


class HelloComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { number, plusOne, getJson, jsonData } = this.props;
        
        let jsonStr = typeof jsonData == 'undefined' ? 'no data' : JSON.stringify(jsonData);

        return (
            <div>
                <button onClick={plusOne}>Add</button>&nbsp;{number}
                <button onClick={() => { getJson('/json/test.json') }}>GetJson</button>
                  <div>
                     {jsonStr}
                  </div>
            </div>
        )
    }
}

function mapState(state) {
    return {
        number: state.num,
        jsonData: state.jsonData
    }
}

function mapDispatch(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapState, mapDispatch)(HelloComponent)
