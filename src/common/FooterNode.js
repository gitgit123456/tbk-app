import React, {PureComponent} from 'react'
import {STATS} from './constants'

class FooterNode extends PureComponent{
     constructor(props) {
         super(props);
     }

  render(){
    const {loaderState, hasMore} = this.props;
    let className = `pull-load-footer-default ${hasMore? "" : "nomore"}`

    return(
      <div className={className}>
        {
          loaderState === STATS.loading ?  "正在刷新.....": ""
        }
      </div>
    )
  }
}
export default FooterNode