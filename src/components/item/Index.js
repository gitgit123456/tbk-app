import React from 'react';

import CommonNavBar from '../../common/NavBar';
import ItemSwipe from './ItemSwipe';
import ItemDetailInfo from './ItemDetailInfo';
import $ from 'jquery';

class ItemIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.location.query,
            product:{}
        };
    }

    componentDidMount() {
        const productId = this.props.match.params.productId;
        $.get("/tbk/product.json?productId="+productId, function(res) {

            this.setState({
                product:res.data.product,
            });
        }.bind(this));
    }
    render(){

        var smallImages = this.state.product.smallImages+"";

        var imgs = smallImages.split(",");
        return(
            <div>
                {/*{this.state.data.pictUrl}*/}
                <CommonNavBar parms={"商品详情"}></CommonNavBar>
                <ItemSwipe smallImages={imgs}></ItemSwipe>
                <ItemDetailInfo product={this.state.product} ></ItemDetailInfo>
            </div>
        )
    }
}

export { ItemIndex as default};