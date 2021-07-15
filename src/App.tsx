import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'antd/dist/antd.css';
import {Header} from './components/Header/Header';
import {Books} from "./components/Books/Books";

const App: React.FC = React.memo(() => {
    return (
        <div>
            <Header/>
            <Books/>
        </div>
    );
})

export const SearchBooksApp: React.FC = React.memo(() => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
})
