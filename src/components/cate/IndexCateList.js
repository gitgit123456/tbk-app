// import React from 'react';
// import { Link ,Prompt } from 'react-router-dom';
//
// class IndexCateList extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         const listItems = this.props.productList.map((obj) => {
//             var link= obj.numIid;
//             return (
//                 <div>
//                     <Link to={'/item/'+link} >
//                         <div  className="goodsOne">
//                             <div  className="cover-image">
//                                 <img src="//oss.lanlanlife.com/758767062f474f4801d22baf0af371ef_100x100.png"  className="tags-img"/>
//                                 <img src={obj.pictUrl+"_300x300q90.jpg"} className="image"/>
//                             </div>
//                             <div  className="item-info">
//                                 <h1  className="title">
//                                     <img src= {obj.userType===1?"http://oss1.lanlanlife.com/f87493c5f309d8b282476c232df6bd4b_26x26.png":"http://oss1.lanlanlife.com/f87493c5f309d8b282476c232df6bd4b_26x26.png"}  className="tabsImg"/>
//                                     {obj.title}
//                                 </h1>
//                                 <div  className="coupon">
//                                     <div  className="price">
//                                         <p>券后<span className="afterCouponPrice">¥{obj.afterCouponPrice}</span></p>
//                                         <span className="zkFinalPrice"> ¥{obj.zkFinalPrice}</span>
//                                     </div>
//                                 </div>
//                                   <div  className="coupon">
//                                     <div className="volume">
//                                         <span >月销{obj.volume} 件</span>
//                                     </div>
//                                 </div>
//                                <div  className="coupon">
//                                    <div  className="css">
//                                    <div id = "div2">{obj.couponPrice}元券</div>
//                                    <div id = "div1">领取</div>
//                                    </div>
//                                </div>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//             )
//         });
//         return (
//             <div>
//                     {/*商品列表*/}
//                     <div className={"listItems"}>
//                         {listItems}
//                     </div>
//             </div>
//         );
//     }
// }
//
// export { IndexCateList as default};
//
