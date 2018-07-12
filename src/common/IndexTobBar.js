// import React from 'react';
// import { TabBar } from 'antd-mobile';
// import PropTypes from 'prop-types';
// import Index from '../components/index/Index'
// import CateIndex from '../components/cate/CateIndex';
//
//
// class IndexTobBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedTab: 'redTab',
//             hidden: false,
//             fullScreen: false,
//             pathname : props.location.pathname
//         };
//
//     }
//
//     // 这一步是重点
//     static contextTypes = {
//         router: PropTypes.object.isRequired
//     };
//
//     render() {
//         return (
//             <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
//                 <TabBar
//                     unselectedTintColor="#949494"
//                     tintColor="#fe4693"
//                     barTintColor="white"
//                     hidden={this.state.hidden}
//                 >
//                     <TabBar.Item
//                             title="首页"
//                             key="index"
//                             icon={<div style={{width: '25px',height: '25px',background: 'url(http://shuzibika.com/tbk/home.png) center center /   25px 25px no-repeat' }}/>}
//                             selectedIcon={ <div style={{width: '25px',height: '25px',background: 'url(http://shuzibika.com/tbk/home1.png) center center /   25px 25px no-repeat' }} />}
//                             selected={this.props.location.pathname === '/index'}
//                             onPress={() => {
//                                 this.context.router.history.push("/index");
//                             }}
//                         >
//                         {<Index/> }
//                     </TabBar.Item>
//                     <TabBar.Item
//                         icon={
//                             <div style={{
//                                 width: '25px',height: '25px',
//                                 background: 'url(http://shuzibika.com/tbk/cate.png) center center /  25px 25px no-repeat' }}
//                             />
//                         }
//                         selectedIcon={
//                             <div style={{
//                                 width: '25px',height: '25px',
//                                 background: 'url(http://shuzibika.com/tbk/cate1.png) center center / 25px 25px no-repeat' }}
//                             />
//                         }
//                         title="分类"
//                         key="incate"
//                         selected={this.props.location.pathname === '/incate'}
//                         onPress={() => {
//                             this.context.router.history.push("/incate");
//                         }}
//                     > {<CateIndex/> }
//                     </TabBar.Item>
//                     <TabBar.Item
//                         icon={
//                             <div style={{
//                                 width: '25px',height: '25px',
//                                 background: 'url(http://shuzibika.com/tbk/9.9.png) center center /  25px 25px no-repeat' }}
//                             />
//                         }
//                         selectedIcon={
//                             <div style={{
//                                 width: '25px',height: '25px',
//                                 background: 'url(http://shuzibika.com/tbk/9.91.png) center center / 25px 25px no-repeat' }}
//                             />
//                         }
//                         title="9.9包邮"
//                         key="friend"
//                         selected={this.props.location.pathname === '/infriend'}
//                         onPress={() => {
//                             this.context.router.history.push("/infriend");
//                         }}
//                     >  {<Index/> }
//                     </TabBar.Item>
//                     <TabBar.Item
//                         icon={
//                             <div style={{
//                                 width: '25px',height: '25px',
//                                 background: 'url(http://shuzibika.com/tbk/my.png) center center /  25px 25px no-repeat' }}
//                             />
//                         }
//                         selectedIcon={
//                             <div style={{
//                                 width: '25px',height: '25px',
//                                 background: 'url(http://shuzibika.com/tbk/my1.png) center center / 25px 25px no-repeat' }}
//                             />
//                         }
//                         title="我的"
//                         key="my"
//                         selected={this.props.location.pathname === '/inmy'}
//                         onPress={() => {
//                             this.context.router.history.push("/inmy");
//                         }}
//                     >
//                         {<Index/> }
//                     </TabBar.Item>
//
//                 </TabBar>
//             </div>
//         );
//     }
// }
// export {IndexTobBar as default}