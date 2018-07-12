import React from 'react';
// import { Link ,Prompt } from 'react-router-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';


class IndexCate extends React.Component {
    constructor(props) {
        super(props);
        var arr =  this.initActive(this.props.cateId);
        this.state = {
            detailHidden:false,
            active:arr
        };
        this.initActive = this.initActive.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isHidden = this.isHidden.bind(this);
    }

    //初始化分类标记
    initActive(cateId){
        const arr = [];
        for (var s=0;s<20;s++){
            if ((s)==cateId){
                arr.push("tab-active")
            }else{
                arr.push("");
            }

        }
        return arr;
    }

    // history 配置
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    componentDidMount() {
    }
    onChange= (value,e) => {
        $(".tab-active").removeClass();
        var arr =  this.initActive(value);
        this.setState({
            active:arr,
            detailHidden:false
        });
        this.props.getCateId(value);
        this.context.router.history.push("/cate/"+value);
    };
    isHidden() {
        this.setState({
            detailHidden:!this.state.detailHidden
        });
    }
    render() {
        return (
            <div className={"am-tab-bar-item"}>
                    {/*分类左右滑动*/}
                    <div className="tabs-wrapper">
                            <div className="tabs">
                                <a   onClick={this.onChange.bind(this,0)} className={this.state.active[0]}>全部</a>
                                <a  onClick={this.onChange.bind(this,1)}  className={this.state.active[1]}>女装</a>
                                <a  onClick={this.onChange.bind(this,8)} className={this.state.active[8]}>男装</a>
                                <a  onClick={this.onChange.bind(this,2)}  className={this.state.active[2]}>百货</a>
                                <a  onClick={this.onChange.bind(this,3)} className={this.state.active[3]}>美食</a>
                                <a  onClick={this.onChange.bind(this,4)} className={this.state.active[4]}>母婴</a>
                                <a  onClick={this.onChange.bind(this,6)} className={this.state.active[6]}>美妆</a>
                                <a  onClick={this.onChange.bind(this,5)} className={this.state.active[5]}>鞋包</a>
                                <a  onClick={this.onChange.bind(this,9)} className={this.state.active[9]}>手机周边</a>
                                <a  onClick={this.onChange.bind(this,7)} className={this.state.active[7]}>内衣</a>
                                <a  onClick={this.onChange.bind(this,10)} className={this.state.active[10]}>配饰</a>
                                <a  onClick={this.onChange.bind(this,12)} className={this.state.active[12]}>成人用品</a>
                                <a  onClick={this.onChange.bind(this,11)} className={this.state.active[11]}>其他</a>
                                <a  onClick={this.onChange.bind(this,1)}>&nbsp;</a>
                            </div>
                            <span onClick={this.isHidden.bind(this)} className="category"></span>
                    </div>
                {/*排序方式*/}
                {/*<div className="tabs-sort">*/}
                    {/*<div >*/}
                        {/*<div className="sort">*/}
                            {/*<a onClick={this.onChange.bind(this)} className="tab-active">最新</a>*/}
                            {/*<a onClick={this.onChange.bind(this)}  className="">价格<i class="icon_sort_price"></i></a>*/}
                            {/*<a onClick={this.onChange.bind(this)} className="">销量</a>*/}
                            {/*<a onClick={this.onChange.bind(this)}  className="">人气</a>*/}
                        {/*</div>*/}
                        {/*<span onClick={this.isHidden.bind(this)} className="category"></span>*/}
                    {/*</div>*/}
                {/*</div>*/}

                    {/*弹出框*/}
                    {this.state.detailHidden?
                    <div  className="categorys">
                        <div className="wrapper">
                            <a onClick={this.onChange.bind(this,1)}  className="category-cell router-link-exact-active router-link-active">
                                <img src={"http://shuzibika.com/tbk/woman.png"}/>
                                <p className="category-cell-item">女装</p>
                            </a>
                            <a onClick={this.onChange.bind(this,8)}  className="category-cell router-link-active">
                                <img src={"http://shuzibika.com/tbk/man.png"}/>
                                <p className="category-cell-item">男装</p>
                            </a>
                            <a onClick={this.onChange.bind(this,2)}  className="category-cell router-link-active">
                                <img src={"http://shuzibika.com/tbk/baihuo.png"}/>
                                <p className="category-cell-item">百货</p>
                            </a>
                            <a onClick={this.onChange.bind(this,3)}  className="category-cell router-link-active">
                                <img src={"http://shuzibika.com/tbk/food.png"}/>
                                <p className="category-cell-item">美食</p>
                            </a>
                            <a onClick={this.onChange.bind(this,4)}  className="category-cell router-link-active">
                                <img src={"http://shuzibika.com/tbk/mothor.png"}/>
                                <p className="category-cell-item">母婴</p>
                            </a>
                            <a onClick={this.onChange.bind(this,6)}  className="category-cell router-link-active">
                                <img src={"http://shuzibika.com/tbk/butileful.png"}/>
                                <p className="category-cell-item">美妆</p>
                            </a>
                            <a onClick={this.onChange.bind(this,5)}  className="category-cell router-link-active">
                                <img src={"http://shuzibika.com/tbk/foots.png"}/>
                                <p className="category-cell-item">鞋包</p>
                            </a>
                            <a onClick={this.onChange.bind(this,9)}  className="category-cell router-link-active">
                                <img src={"http://shuzibika.com/tbk/phone.png"}/>
                                <p className="category-cell-item">手机周边</p>
                            </a>
                            <a onClick={this.onChange.bind(this,7)}  className="category-cell router-link-active">
                                <img src={"http://shuzibika.com/tbk/neiyi.png"}/>
                            <p className="category-cell-item">内衣</p>
                            </a>
                            <a onClick={this.onChange.bind(this,10)}  className="category-cell router-link-active">
                                <img src={"http://shuzibika.com/tbk/eyes.png"}/>
                            <p className="category-cell-item">配饰</p>
                            </a>

                            <a onClick={this.onChange.bind(this,12)}  className="category-cell router-link-active">
                                <img src={"http://shuzibika.com/tbk/byt.png"}/>
                                <p className="category-cell-item">成人用品</p>
                            </a>
                            <a onClick={this.onChange.bind(this,11)}  className="category-cell router-link-active">
                                <img src={"http://shuzibika.com/tbk/else.png"}/>
                                <p className="category-cell-item">其他</p>
                            </a>
                        </div>
                    </div>
                        :
                        <div></div>
                    }
            </div>
        );
    }
}

export { IndexCate as default};

