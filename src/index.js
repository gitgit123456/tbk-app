
//common js
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store'
import {Provider} from 'react-redux';
import { Route,Link,Switch,BrowserRouter,HashRouter} from 'react-router-dom';
//css
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';

//fun
import registerServiceWorker from './registerServiceWorker';

//components
import RouterConfig from './router/RouterConfig';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <RouterConfig />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
