import React from 'react';
import IndexSearch from '../../common/IndexSearch';
import "./nine.css"
import $ from 'jquery';
import NinePullLoad from './NinePullLoad.js';
import IndexFoot from '../../common/IndexFoot';



class NineIndex extends React.Component{
    constructor(props) {
        super(props);
        var arr =  this.initActive(0);
        this.state = {
            productList:[],
            categoryId:0,
            sort:1,
            pageNo:1,
            totalCount:1,
            query:'',
            active:arr,
            pathname : window.location.pathname,
        };

        this.initActive = this.initActive.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        var    pageNo = this.state.pageNo;
        this.getProductList(pageNo);
    }
    //初始化分类标记
    initActive(categoryId){
        const arr = [];
        for (var s=0;s<20;s++){
            if ((s)==categoryId){
                arr.push("tab-active")
            }else{
                arr.push("");
            }

        }
        return arr;
    }

    onChange= (value,e) => {
        $(".tab-nine-sort-active").removeClass();
        var arr =  this.initActive(value);
        this.setState({
            active:arr
        });
    };

    //加载刷新
    reLoad(event){
        this.setState(
            {
                pageNo:event
            }
        );
        this.getProductList(event)
    }



    //更新商品数据
    getProductList(pageNo){

        $.get("/tbk/goodCoupon.json",{ pageNo:pageNo}, function(res) {

            var arr = this.state.productList;
            if (pageNo==1){
                arr=res.data;
            }else{
                arr.push(...res.data);
            }

            this.setState({
                productList:arr,
                totalCount:res.totalCount,
                pageNo:pageNo,
            });

        }.bind(this));
    }

    render() {
        return (
            <div>
                <IndexSearch></IndexSearch>
                <div>
                    <div className="tabs-nine">
                        <div className="tabs-nine-img_9">
                            <img src={this.state.pathname.includes("/9")?"http://shuzibika.com/tbk/cate1.png":"http://shuzibika.com/tbk/cate.png"}   alt=""/>
                            <a  onClick={this.onChange.bind(this,0)} className={this.state.active[0]}>9.9包邮</a>
                        </div>
                        <div className="tabs-nine-img_20">
                            <img src={this.state.pathname.includes("/9")?"http://shuzibika.com/tbk/cate1.png":"http://shuzibika.com/tbk/cate.png"}   alt=""/>
                            <a  onClick={this.onChange.bind(this,1)}  className={this.state.active[1]}>20元封顶</a>
                        </div>
                    </div>
                    <div className="tabs-nine-sort">
                        <a onClick={this.onChange.bind(this)} className="tab-nine-sort-active">最新</a>
                        <a onClick={this.onChange.bind(this)}  className="">    价格  <i className="icon_sort_price"></i></a>
                        <a onClick={this.onChange.bind(this)} className="">     销量   <i className="icon_sort_price"></i></a>
                        <a onClick={this.onChange.bind(this)}  className="">    人气  <i className="icon_sort_price"></i></a>
                    </div>
                </div>
                    <NinePullLoad
                        reLoad={this.reLoad.bind(this)}
                        totalCount={this.state.totalCount}
                        productList={this.state.productList}
                        pageNo={this.state.pageNo}
                    >
                    </NinePullLoad>
                <IndexFoot></IndexFoot>
            </div>
        );
    }

}

export { NineIndex as default};
