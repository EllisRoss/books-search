import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './Header.module.css'
import {useDispatch} from "react-redux";
import {getBooks} from "../../redux/searchBooksReducer";


export const Header: React.FC = React.memo(() => {

    const [query, setQuery] = useState('');

    const dispatch = useDispatch();

    const onSearch = () => {
        if (query.length > 0) {
            dispatch(getBooks(query));
        }
    }

    return (
        <div className={styles.background}>
            <div className={styles.header}>
                <div className={styles.heading}>
                    <b>Search for books</b>
                </div>

                <div className={styles.input}>
                    <Input value={query} onChange={e => (setQuery(e.target.value))}/>
                </div>
                <div className={styles.button}>
                    <Button onClick={onSearch} shape="circle" icon={<SearchOutlined/>}/>
                </div>
            </div>
        </div>
    );
})
