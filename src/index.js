import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

const StoreInstance = store();

ReactDOM.render(
    <Provider store={StoreInstance}>
        <App />
    </Provider>,
    document.querySelector("#root")
)