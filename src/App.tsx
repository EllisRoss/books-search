import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'antd/dist/antd.css';
import styles from "./App.module.css";
import {Header} from './components/Header/Header';
import {Books} from "./components/Books/Books";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Book } from './components/Book/Book';
import { Empty } from 'antd';

const App: React.FC = React.memo(() => {

    const catchAllUnhandledErrors = (event: PromiseRejectionEvent) => {
        alert(event.reason);
    }

    useEffect(() => {
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors);

        return () => {
            window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
        }
    }, [])

    return (
        <div>
            <Header/>
            <div className={styles.content}>
                <Switch>
                    <Route exact path='/' render={() => <Books/> } />
                    <Route exact path='/book/:id' render={() => <Book/> } />
                    <Route path='*' render={() => <Empty description='404 not found' />}/>
                </Switch>
            </div>
        </div>
    );
})

export const SearchBooksApp: React.FC = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}