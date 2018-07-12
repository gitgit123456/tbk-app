import React from 'react';
import { Grid } from 'antd-mobile';
import './index.css'
class IndexActivityGrid extends React.Component{

    constructor(){
        super();
        this.handOnClick = this.handOnClick.bind(this);
    }

    handOnClick(el,index){

        if (el.text === "美食"){
            alert("美食")
        }
    }

    render(){
        const json = [
            {
                icon: 'https://img.alicdn.com/tfscom/i1/2058803214/TB22wqns4tmpuFjSZFqXXbHFpXa_!!2058803214.jpg_280x380xz.jpg',
            },
            {
                icon: 'https://img.alicdn.com/tfscom/i1/2058803214/TB22wqns4tmpuFjSZFqXXbHFpXa_!!2058803214.jpg_280x380xz.jpg',
            },
            {
                icon: 'https://img.alicdn.com/tfscom/i1/2058803214/TB22wqns4tmpuFjSZFqXXbHFpXa_!!2058803214.jpg_280x380xz.jpg',
            },
            {
                icon: 'https://img.alicdn.com/tfscom/i1/2058803214/TB22wqns4tmpuFjSZFqXXbHFpXa_!!2058803214.jpg_280x380xz.jpg',
            },
        ]
        return(
            <div>
                <Grid className = {"index_activity_grid"}
                    data={json}
                    columnNum = {2}
                    hasLine={true}
                    isCarousel
                    onClick={(el,index)=> this.handOnClick(el,index)}
                    itemStyle={{ height: '100px', background: 'rgba(0,0,0,.05)' }}
                />
            </div>
            )
    }
}

export {IndexActivityGrid as default}

