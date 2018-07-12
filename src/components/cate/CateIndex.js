import React from 'react';
import IndexSearch from '../../common/IndexSearch'
import IndexCateList from './IndexCateList'
import IndexCate from './IndexCate'
import CatePullLoad from './CatePullLoad'
import "./cate.css"
import $ from 'jquery';
import IndexFoot from '../../common/IndexFoot'
import PropTypes from 'prop-types';


class CateIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            productList:[],
            cateId:this.props.match.params.cateId,
            sort:1,
            pageNo:1,
            totalCount:1,
            query:''
        };
        this.getCateId = this.getCateId.bind(this);
        this.getQuery = this.getQuery.bind(this);
        this.reLoad = this.reLoad.bind(this);
    }
    // history 配置
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    componentDidMount() {
        var    sort   = this.state.sort;
        var    pageNo = this.state.pageNo;
        var    cateId = this.state.cateId;
        var    query = this.state.query;

        this.getProductList(cateId,sort,pageNo,query);
    }
    componentWillUpdate(){
        // this.getProductList()
    }


    //分类
    getCateId(event){
        var    sort   = this.state.sort;
        var    pageNo = this.state.pageNo;

        this.setState(
            {
                cateId: event,
                totalCount: 1,
                pageNo:1,
                query: ""
            }
        );
        this.getProductList(event,sort,1,"");
    }

    //查询
    getQuery(event){
        var    sort   = this.state.sort;
        var    pageNo = this.state.pageNo;

        this.context.router.history.push("/cate/"+0);
        this.setState(
            {
                cateId: 0,
                query:event,
                pageNo:1
            }
        );
        this.getProductList(0,sort,1,event)
    }
    //加载刷新
    reLoad(event){
        var    sort   = this.state.sort;
        var    cateId = this.state.cateId;
        var    query = this.state.query;
        this.setState(
            {
                pageNo:event
            }
        );
        this.getProductList(cateId,sort,event,query)
    }

    //更新商品数据
    getProductList(cateId,sort,pageNo,query){

        $.get("/tbk/productList.json",{ cateId: cateId, sort: sort ,pageNo:pageNo,query:query}, function(res) {

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

    //
    render(){
        return(
            <div>
                <IndexSearch getQuery={this.getQuery.bind(this)} ></IndexSearch>
                <IndexCate getCateId={this.getCateId.bind(this)} cateId={this.state.cateId}></IndexCate>
                {/*<IndexCateList productList={this.state.productList} ></IndexCateList>*/}
                <CatePullLoad
                    reLoad={this.reLoad.bind(this)}
                    totalCount={this.state.totalCount}
                    productList={this.state.productList}
                    pageNo={this.state.pageNo}
                ></CatePullLoad>
                <IndexFoot></IndexFoot>
            </div>
        )
    }
}

export { CateIndex as default};