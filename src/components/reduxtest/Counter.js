import React, { Component } from 'react';
import { connect } from 'react-redux'
import { wang ,zhang} from '/action'

import Cared from './Cared'
import Dialog from './Dialog'

class Counter extends Component{
    render () {
        return <div className="g-index">
            <Cared />
            {/*<Dialog />*/}
            <button onClick={this.props.changeNameWang}>wang</button>
            <button onClick={this.props.changeNameZhang}>zhang</button>
        </div>
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {    // dispatch 传入的是 action对象
    return {
        changeNameWang () {
            dispatch(wang(
                            {
                                name: '葬爱',
                                picture: 'sssssssssssssssssssssssssssss'
                            }
                        )
                )
        },
        changeNameZhang () {
            dispatch(zhang({
                name: '葬爱zhang',
                picture: 'zhang'
            }))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
