
import React from 'react';

import { NavBar , Icon} from 'antd-mobile';
import PropTypes from 'prop-types';
class CommonNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onLeftClick = this.onLeftClick.bind(this)
    }
// 这一步是重点
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    componentDidMount() {
        this.setState({
        });
    }

    onLeftClick(){
        console.log('onLeftClick')
        this.context.router.history.goBack();
    }

    render() {
        return (
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={this.onLeftClick.bind(this)}
                rightContent={[
                    <Icon key="1" type="ellipsis" />,
                ]}
            >{this.props.parms}</NavBar>
        );
    }
}

export {CommonNavBar as default}