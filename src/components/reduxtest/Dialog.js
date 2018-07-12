// Card.jsx
import React from 'react'
import { connect } from 'react-redux'

const Cared = (props) => {
    return <div className="m-card">
        <div>
            姓名：{props.name}
        </div>
        <div>
            照片：{props.picture}
        </div>
    </div>
}

function mapStateToProps(state) {
    var info = state.namessss

    return {
        name: info.name,
        picture: info.picture
    }
}

export default connect(mapStateToProps)(Cared)
