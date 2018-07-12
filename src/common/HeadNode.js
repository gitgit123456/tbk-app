import React, {PureComponent} from 'react'
import {STATS} from './constants'

class HeadNode extends PureComponent{
     constructor(props) {
         super(props);
     }

     render(){
         const {loaderState, hasMore} = this.props;
         let className = `pull-load-head-default ${hasMore? "" : "nomore"}`

         return(
             <div className={className}>
                 {
                     loaderState === STATS.refreshing ?  "正在刷新.....": ""
                 }
             </div>
         )
     }
 }
export default  HeadNode