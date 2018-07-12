import React from 'react';

import { Carousel, WingBlank } from 'antd-mobile';

class ItemSwipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            imgHeight: 176,
            slideIndex:3
        };


    }

    componentDidMount() {
        // this.props.smallImages.map(value => {
        //     return 1;
        // })

    }
    componentDidUpdate(){
        setTimeout(() => {
            this.setState({
                slideIndex:0
            });
        }, 100);
    }
    render() {

        const imgs = this.props.smallImages.map((obj,index)=>{
            return (
                <img
                    src={obj+"_2200x2200Q50s50.jpg"}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    key={index}
                />
            );
        });

        return (
            <div className={"ItemSwipe"}>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite = {true}
                        autoplayInterval = {3000}
                        selectedIndex = {this.state.slideIndex}
                    >
                    {imgs}
                    </Carousel>
                </WingBlank>
            </div>
        );
    }
}

export {ItemSwipe as default}