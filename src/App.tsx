import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'antd/dist/antd.css';
import styles from "./App.module.css";
import {Header} from './components/Header/Header';
import {Books} from "./components/Books/Books";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import { Book } from './components/Book/Book';

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
                    <Route exact path='/' render={() => <Redirect to='/books'/> } />
                    <Route path='/books' render={() => <Books/> } />
                    <Route path='/book/:id?' render={() => <Book/> } />
                    <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                </Switch>
            </div>
        </div>
    );
})

export const SearchBooksApp: React.FC = () => {
    return (
        <React.StrictMode>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}