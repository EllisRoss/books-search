import {Button, List} from 'antd';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
    selectBooks,
    selectFilter,
    selectIsFetchingBooks, selectIsFetchingMoreBooks,
    selectPageSize,
    selectSearchResults
} from '../../redux/searchBooksSelectors';
import styles from "./Books.module.css";
import Preloader300px from "../../assets/images/Preloader300px.svg";
import Preloader from "../common/Preloader/Preloader";
import {loadMoreBooks, searchBooksActions} from "../../redux/searchBooksReducer";
import {NavLink} from 'react-router-dom';
import {CardItem} from "./CardItem";

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
                        <NavLink to={'/book/' + item.id} onClick={() => {
                            // dispatch current book data to state
                            dispatch(searchBooksActions.bookInfoChanged(item))
                        }}>
                            <CardItem itemInfo={item.volumeInfo} />
                        </NavLink>
                    </List.Item>
                )}
            />
            {
                isFetchingMoreBooks &&
                <Preloader src={Preloader300px}/>
            }
            {
                books.length > 0 &&
                <Button className={styles.loadMoreButton} onClick={onLoadMore} size="large">Load more...</Button>
            }
        </div>
    );
})
