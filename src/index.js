import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import RootRoute from './routes/by-router';
// import App from './page/gy/comment/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './page/follaw/common/redux/store';


ReactDOM.render(<Provider store={store}>
        <RootRoute />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
