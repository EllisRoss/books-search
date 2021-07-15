import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Button, Col, Input, Row, Select} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './Header.module.css'
import {useDispatch} from "react-redux";
import {getBooks} from "../../redux/searchBooksReducer";
import { Categories, SortingBy } from '../../types/types';


export const Header: React.FC = React.memo(() => {

    const [query, setQuery] = useState('');
    const [categories, setCategories] = useState<Categories>("all");
    const [sortingBy, setSortingBy] = useState<SortingBy>("relevance");

    const dispatch = useDispatch();

    const onSearch = () => {
        if (query.length > 0) {
            dispatch(getBooks(query, categories, sortingBy));
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
            {/*Filter Panel*/}
            <Row>
                <Col>
                    <label className={styles.categoriesLabel}>Categories</label>
                    <Select className={styles.categoriesSelect} value={categories} onChange={e => setCategories(e)}>
                        <Select.Option value="all">all</Select.Option>
                        <Select.Option value="art">art</Select.Option>
                        <Select.Option value="biography">biography</Select.Option>
                        <Select.Option value="computers">computers</Select.Option>
                        <Select.Option value="history">history</Select.Option>
                        <Select.Option value="medical">medical</Select.Option>
                        <Select.Option value="poetry">poetry</Select.Option>
                    </Select>
                </Col>
                <Col>
                    <label className={styles.sortingLabel}>Sorting by</label>
                    <Select className={styles.sortingSelect} value={sortingBy} onChange={e => setSortingBy(e)}>
                        <Select.Option value="relevance">relevance</Select.Option>
                        <Select.Option value="newest">newest</Select.Option>
                    </Select>
                </Col>
            </Row>
            {/*Filter Panel*/}
        </div>
    );
})