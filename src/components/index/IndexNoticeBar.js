import React from 'react';

import { NoticeBar, WhiteSpace } from 'antd-mobile';

import "./index.css"

class IndexNoticeBar extends React.Component{


    render(){
        return (
            <div>
                <WhiteSpace size="lg" />
                <NoticeBar
                    // icon={<Icon type="check-circle-o" size="xxs" />}
                    marqueeProps={{ loop: true, style: { padding: '0 7.5px',
                                                        color: '#0c0808',
                                                        fontSize: '14px',
                                                        wordSpacing: '18px',
                                                        letterSspacing: '1px'} }}>
                    来自山东的亮亮3秒前下了一单  来自山东的亮亮3秒前下了一单   来自山东的亮亮3秒前下了一单
                </NoticeBar>
            </div>
        )
    }
}

export {IndexNoticeBar as default}

