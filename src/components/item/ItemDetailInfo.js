import React from 'react';

import { Button ,Toast} from 'antd-mobile';
import { Link ,Prompt } from 'react-router-dom';
import  copy  from 'copy-to-clipboard';
import $ from 'jquery';
import   './item.css';

class ItemDetailInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail:'',
            detailHidden:false
        };
        this.itemDetail = this.itemDetail.bind(this);
        this.tpwdCopy = this.tpwdCopy.bind(this);
    }


    componentDidMount() {

        this.setState({
            ww:111
        });
    }
    itemDetail() {
        // const productId = this.props.match.params.productId;
       var numIid =  this.props.product.numIid;
       var userType =  this.props.product.userType;

        $.get(" /tbk/productDetail.json",{productId:numIid,itemType:userType}, function(res) {
            this.setState({
                detail:res.data
            });
        }.bind(this));
        this.setState({
            detailHidden:true
        });
    }
    tpwdCopy(){
       var ss =  $("#copy_tpwd")[0].innerText;
        copy(ss); //'我是要复制的内容'
        Toast.success('打开［手机淘宝］即可领券购买！', 2);
    }

    render() {
        let obj  = this.props.product;

        return (
            <div>
                {/*商品标题*/}
                <div  className="detail-info">
                    <h3 >
                        <span>{obj.title}</span>
                    </h3>
                    <p  className="rec">月销爆卖{obj.volume}件</p>
                    <div  className="price">
                        <span  className="title">券后价</span>
                        <span  className="yPrice">¥{obj.afterCouponPrice} </span>
                        <span className="oPrice">¥{obj.zkFinalPrice}  </span>
                        <span  className="monthSales">{obj.couponInfo} </span>
                    </div>
                </div>
                {/*复制淘口令*/}
                <div className="tpwd-copy">
                    <Button  id="copy-trigger-tpwd"  className="copy-btn" onClick={this.tpwdCopy.bind(this)}>
                        <img  src="//oss.lanlanlife.com/3f75c9aed0c58300540c04ea703a3be2_36x36.png"/>
                        一键复制淘口令
                    </Button>
                    <div  className="copy-area">
                        <div >
                            <p ref="copy_tpwd" id="copy_tpwd">{obj.couponModel}</p>
                        </div>
                        <span >长按全选复制文字，然后打开［手机淘宝］即可领券购买</span>
                    </div>
                </div>

                {/*立即领券*/}
                <div >
                    <div  className="coupon">
                        <a  href={obj.couponShareUrl} >
                            <span className="amount"><s >￥</s><b>{obj.couponPrice} </b></span>
                            <span  className="time">
                                <s><i >优惠券</i>使用期限</s>
                                <b>{obj.couponStartTime}至{obj.couponEndTime}</b>
                            </span>
                            <span  className="go-coupon">立即领券</span>
                        </a>
                    </div>
                </div>

                {/*推荐语*/}
                <div  className="recommend">
                    <label >推荐语</label>
                    <p>“【月销爆卖16万件】个性时尚百搭款，医用级耳针，不过敏不掉色，采用精致的毛球，甜美又有个性，简约时尚，轻盈自然，超仙毛绒耳饰，精选80款总有一款适合你，让你一秒变女简直不能再赞了！”</p>
                </div>
                <div  className="divide"></div>
                {/*店铺名称*/}
                <div  className="grade">
                    <img  src={obj.userType==0?"http://sqn1.lanlanlife.com/shop_rank_image_hg5.png":"http://oss1.lanlanlife.com/d343c64fdedfd7d52407c3eeaef78f07_36x213.png"}/>
                    <span className="name">{obj.shopTitle}</span>
                    <div  className="dsr">
                        <span >
                            宝贝描述<b >4.6</b><i className="up"></i>
                        </span>
                        <span >卖家服务<b>4.7</b><i  className="up"></i></span>
                        <span>物流服务<b >4.7</b><i  className="up"></i></span>
                    </div>
                </div>
                <div  className="divide"></div>

                {/*商品详情*/}
                {this.state.detailHidden?
                    <div  className="multi-image" >

                        {/*<div dangerouslySetInnerHTML = {this.state.detail}></div>*/}
                        <div dangerouslySetInnerHTML={{__html: this.state.detail}}/>
                    </div>
                    :
                    <div  className="multi-image">
                        <p >
                            <Button className={"button"}  onClick={this.itemDetail.bind(this)} >查看图文详情</Button>
                        </p>
                    </div>
                }

                <footer  className="footer">
                    <ul >
                        <li >
                            <Link to={'/'} className="home-link" >
                                <img src="http://shuzibika.com/tbk/home.png" alt=""/>
                                <span >首页</span>
                            </Link>
                        </li>
                        <li >
                            <a  href="javascript:;" className="share-btn">
                                <img src="//oss3.lanlanlife.com/9647feda49c08796a9782f85a1152f32_36x36.png" alt=""/>
                                <span >分享图片</span>
                            </a>
                        </li>
                        <li  className="btn tpwd">
                            <a  onClick={this.tpwdCopy.bind(this)}>复制淘口令</a>
                        </li>
                      </ul>
                </footer>
            </div>
        
            
        );
    }
}

export {ItemDetailInfo as default}