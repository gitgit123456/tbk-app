import React from 'react';

import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

import "./common.css"

class IndexSearch extends React.Component {


    constructor(props) {
        super(props);
        this. state = {
            value: '',
        };
    }

    onChange= (value) => {

        this.setState({ value });
        this.props.getQuery(value);
    };
    search(value){
        console.info("search"+value);
        this.props.getQuery(value);
    }
    render() {
        return (
            <div className={""}>
                {/*<div>头部</div>*/}
                <div className={"index_search"}>
                    <SearchBar placeholder="超级搜索"
                               maxLength={16}
                               value={this.state.value}
                               onSubmit={this.search}
                               onChange={this.onChange}
                    />
                </div>
                {/*<div>尾部</div>*/}
            </div>
            )
    }
}

export { IndexSearch as default};

