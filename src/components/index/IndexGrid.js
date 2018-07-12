import React from 'react';
import { Grid } from 'antd-mobile';
class IndexGrid extends React.Component{

    constructor(){
        super();
        this.handOnClick = this.handOnClick.bind(this);
    }

    handOnClick(data){

        if (data.text == "美食"){
            alert("美食")
        }
    }

    render(){
        const json = [
            {
                icon: 'https://img.zcool.cn/community/01de9459b8ebdaa801207534dfde72.png@1280w_1l_2o_100sh.webp',
                text: `女装`,
            },
            {
                icon: 'https://img.zcool.cn/community/01de9459b8ebdaa801207534dfde72.png@1280w_1l_2o_100sh.webp',
                text: `美食`,
            },
            {
                icon: 'https://img.zcool.cn/community/01de9459b8ebdaa801207534dfde72.png@1280w_1l_2o_100sh.webp',
                text: `母婴`,
            },
            {
                icon: 'https://img.zcool.cn/community/01de9459b8ebdaa801207534dfde72.png@1280w_1l_2o_100sh.webp',
                text: `居家`,
            },
            {
                icon: 'https://img.zcool.cn/community/01de9459b8ebdaa801207534dfde72.png@1280w_1l_2o_100sh.webp',
                text: `鞋包`,
            },
            {
                icon: 'https://img.zcool.cn/community/01de9459b8ebdaa801207534dfde72.png@1280w_1l_2o_100sh.webp',
                text: `美妆`,
            },
            {
                icon: 'https://img.zcool.cn/community/01de9459b8ebdaa801207534dfde72.png@1280w_1l_2o_100sh.webp',
                text: `内衣`,
            },
            {
                icon: 'https://img.zcool.cn/community/01de9459b8ebdaa801207534dfde72.png@1280w_1l_2o_100sh.webp',
                text: `数码`,
            },
            {
                icon: 'https://img.zcool.cn/community/01de9459b8ebdaa801207534dfde72.png@1280w_1l_2o_100sh.webp',
                text: `男装`,
            },
            {
                icon: 'https://img.zcool.cn/community/01de9459b8ebdaa801207534dfde72.png@1280w_1l_2o_100sh.webp',
                text: `分类`,
            },


        ]
        return(
            <div>
                {/*<Grid data={json} columnNum = {5} hasLine={false}  isCarousel onClick={_el => console.log(_el)} />*/}
                <Grid data={json} columnNum = {5} hasLine={false}  isCarousel onClick={el => this.handOnClick(el)} />
            </div>
            )
    }
}

export {IndexGrid as default}