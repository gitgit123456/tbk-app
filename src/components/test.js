import ReactPullLoad,{ STATS } from 'react-pullload'
import React from 'react';

var arr=[];
for (var s = 1;s<100;s++){
    arr.push(s);
}


 class App extends React.Component{
    constructor(){
        super();
        this.state ={
            hasMore: true,
            data: arr,
            action: STATS.init,
            index: 1 //loading more test time limit
        }
    }

    handleAction = (action) => {
        console.info(action, this.state.action,action === this.state.action);
        //new action must do not equel to old action
        if(action === this.state.action){
            return false
        }

        if(action === STATS.refreshing){//刷新
            this.handRefreshing();
        } else if(action === STATS.loading){//加载更多
            this.handLoadMore();
        } else{
            //DO NOT modify below code
            this.setState({
                action: action
            })
        }
    }

    handRefreshing = () =>{

        if(STATS.refreshing === this.state.action){
            return false
        }
        setTimeout(()=>{
            //refreshing complete
            this.setState({
                data: arr,
                hasMore: true,
                action: STATS.refreshed,
                index: 2
            });
        }, 3000)
        //
        this.setState({
            action: STATS.refreshing
        })
    }

    handLoadMore = () => {

        if(STATS.loading === this.state.action){
            return false
        }
        setTimeout(()=>{
            if(this.state.index === 0){
                this.setState({
                    action: STATS.reset,
                    hasMore: false
                });
            } else{
                this.setState({
                    data: arr,
                    action: STATS.reset,
                    index: this.state.index - 1
                });
            }
        }, 3000)
        this.setState({
            action: STATS.loading
        })
    }

    render(){
        const {
            data,
            hasMore
        } = this.state

        return (
            <div>
                <ReactPullLoad
                    downEnough={150}
                    action={this.state.action}
                    handleAction={this.handleAction}
                    hasMore={hasMore}
                    style={{paddingTop: 50}}
                    distanceBottom={1000}>
                    <ul className="test-ul">
                        {
                            data.map( (str, index )=>{
                                return <li >{index}</li>
                            })
                        }
                    </ul>
                </ReactPullLoad>
            </div>
        )
    }
}

export default App