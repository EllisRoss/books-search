import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';

const App: React.FC = () => {

    return (
        <div className="App">
            <header>
                Search for books
            </header>

        </div>
    );
}

export const SearchBooksApp: React.FC = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
}
