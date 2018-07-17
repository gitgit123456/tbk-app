import React from 'react';
import IndexSearch from '../../common/IndexSearch';
import "./nine.css"
import $ from 'jquery';
import CatePullLoad from '../../components/cate/CatePullLoad';
import "../../components/cate/cate.css"
import IndexFoot from '../../common/IndexFoot';


class NineTab extends React.Component{
    constructor(props) {
        super(props);
        var arr =  this.initActive(0);
        this.state = {
            active:arr,
        };
        this.initActive = this.initActive.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange= (value,e) => {
        $(".tab-nine-sort-active").removeClass();
        var arr =  this.initActive(value);
        this.setState({
            active:arr
        });
    };
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
    render() {

        return (
            <div>
                <div className="tabs-nine">
                    <div className="tabs-nine-img_9">
                        <img src="http://shuzibika.com/tbk/cate1.png"   alt=""/>
                        <a  onClick={this.onChange.bind(this,0)} className={this.state.active[0]}>9.9包邮</a>
                    </div>
                    <div className="tabs-nine-img_20">
                        <img src="http://shuzibika.com/tbk/cate1.png"   alt=""/>
                        <a  onClick={this.onChange.bind(this,1)}  className={this.state.active[1]}>20元封顶</a>
                    </div>
                </div>
                <div className="tabs-nine-sort">
                    <a onClick={this.onChange.bind(this)} className="tab-nine-sort-active">最新</a>
                    <a onClick={this.onChange.bind(this)}  className="">价格<i class="icon_sort_price"></i></a>
                    <a onClick={this.onChange.bind(this)} className="">销量<i className="icon_sort_price"></i></a>
                    <a onClick={this.onChange.bind(this)}  className="">人气<i className="icon_sort_price"></i></a>
                </div>
            </div>
        );
    }

}

export { NineTab as default};