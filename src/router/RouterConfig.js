import React from 'react';
import { Route,Link,Switch,BrowserRouter,HashRouter,Redirect} from 'react-router-dom';

import ItemIndex from '../components/item/Index';
import Index from '../components/index/Index';
import CateIndex from '../components/cate/CateIndex';

const RouterConfig = () => (
    <Switch>
        <Redirect exact from="/" to="/index"/>
        <Route exact path='/index' component={Index} />
        <Route exact path='/cate/:cateId' component={CateIndex} />
        <Route exact path='/item/:productId' component={ItemIndex} />
    </Switch>
)
export default RouterConfig
