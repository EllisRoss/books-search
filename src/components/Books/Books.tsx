import {Button, List} from 'antd';
import React from 'react';
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

    const books = useSelector(selectBooks);
    const searchResults = useSelector(selectSearchResults);
    const isFetchingBooks = useSelector(selectIsFetchingBooks);
    const isFetchingMoreBooks = useSelector(selectIsFetchingMoreBooks);
    const pageSize = useSelector(selectPageSize);
    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();

    const onLoadMore = () => {
        if (filter) {
            dispatch(loadMoreBooks(filter.query, filter.category, filter.sortBy, pageSize));
        }
    }

    if (isFetchingBooks) {
        return <Preloader src={Preloader300px}/>
    }
    return (
        <div className={styles.books}>
            {
                books.length > 0 &&
                <div className={styles.books__results}>
                    <b>Found {searchResults} results</b>
                </div>
            }

            <List
                grid={{gutter: 16}}
                dataSource={books}
                renderItem={item => (
                    <List.Item>
                        <NavLink to={'/book/' + item.id} onClick={() => {
                            // dispatch current book data to state
                            dispatch(searchBooksActions.bookInfoChanged(item))
                        }}>
                            <CardItem itemInfo={item.volumeInfo}/>
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
                <Button className={styles.books__button} onClick={onLoadMore} size="large">Load more...</Button>
            }
        </div>
    );
})
