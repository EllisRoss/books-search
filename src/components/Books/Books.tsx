import {Button, Card, List} from 'antd';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
    selectBooks,
    selectFilter,
    selectIsFetchingBooks, selectIsFetchingMoreBooks,
    selectPageSize,
    selectSearchResults
} from '../../redux/searchBooksSelectors';
import styles from "./Book.module.css";
import bookPlaceholder from "../../assets/images/book-placeholder.png";
import Preloader300px from "../../assets/images/Preloader300px.svg";
import Preloader from "../common/Preloader/Preloader";
import {loadMoreBooks} from "../../redux/searchBooksReducer";

export const Books: React.FC = React.memo(() => {

    const [col, setCol] = useState(4)

    // set max columns in antd List
    const handleResize = () => {
        if (window.innerWidth < 600) {
            setCol(1);
        }
        if (window.innerWidth >= 600) {
            setCol(2)
        }
        if (window.innerWidth >= 900) {
            setCol(3)
        }
        if (window.innerWidth >= 1200) {
            setCol(4)
        }
        if (window.innerWidth >= 1500) {
            setCol(5)
        }
        if (window.innerWidth >= 1800) {
            setCol(6)
        }
        if (window.innerWidth >= 2100) {
            setCol(7)
        }
        if (window.innerWidth >= 2400) {
            setCol(8)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    const dispatch = useDispatch();

    const books = useSelector(selectBooks);
    const searchResults = useSelector(selectSearchResults);
    const isFetchingBooks = useSelector(selectIsFetchingBooks);
    const isFetchingMoreBooks = useSelector(selectIsFetchingMoreBooks);
    const pageSize = useSelector(selectPageSize);
    const filter = useSelector(selectFilter);

    const onLoadMore = () => {
        if (filter) {
            dispatch(loadMoreBooks(filter.query, filter.category, filter.sortBy, pageSize));
        }
    }

    // return array of div with styles from string array
    const printItemsList = (items: string[], style: string): JSX.Element => {
        let str = '';
        if (items) {
            items.forEach((item, index) => {
                str += item;
                if (index + 1 !== items.length) {
                    str += ', '
                }
            })
        }
        return <div className={style}>{str}</div>;
    }

    if (isFetchingBooks) {
        return <Preloader src={Preloader300px}/>
    }
    return (
        <div className={styles.wrapper}>
            {
                books.length > 0 &&
                <div className={styles.foundResults}>Found {searchResults} results</div>
            }

            <List
                grid={{gutter: 16, column: col}}
                dataSource={books}
                renderItem={item => (
                    <List.Item>
                        <Card hoverable={true} className={styles.cardWrapper}>
                            <div className={styles.cover}>
                                {
                                    item.volumeInfo.imageLinks &&
                                    <img src={item.volumeInfo.imageLinks?.thumbnail} alt=""/>
                                }

                                {
                                    !item.volumeInfo.imageLinks &&
                                    <img src={bookPlaceholder} alt=""/>
                                }
                            </div>

                            {printItemsList(item.volumeInfo.categories, styles.categories)}
                            <div className={styles.title}>{item.volumeInfo.title}</div>
                            {printItemsList(item.volumeInfo.authors, styles.authors)}
                            <a href={item.volumeInfo.infoLink}>Link to Google Shop</a>
                        </Card>
                    </List.Item>
                )}
            />
            {
                books.length > 0 &&
                <Button onClick={onLoadMore} size="large">Load more...</Button>
            }
            {
                isFetchingMoreBooks &&
                    <Preloader src={Preloader300px} />
            }
        </div>
    );
})
