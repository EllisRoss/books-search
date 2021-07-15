import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'antd/dist/antd.css';
import {Header} from './components/Header/Header';
import {Books} from "./components/Books/Books";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import { Book } from './components/Book/Book';

const App: React.FC = React.memo(() => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/books'/> } />
                <Route path='/books' render={() => <Books/> } />
                <Route path='/book/:id?' render={() => <Book/> } />
                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
        </div>
    );
})


export const SearchBooksApp: React.FC = React.memo(() => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
})
