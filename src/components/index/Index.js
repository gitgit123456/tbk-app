import React from 'react';
import IndexSearch from '../../common/IndexSearch'
import IndexFoot from '../../common/IndexFoot'
import IndexPullLoad from './IndexPullLoad'


class Index extends React.Component{
    render(){
        return(
            <div>
                <IndexSearch></IndexSearch>
                <IndexPullLoad></IndexPullLoad>
                <IndexFoot></IndexFoot>
            </div>
        )
    }
}

export { Index as default};