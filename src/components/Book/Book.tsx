import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectBookInfo, selectIsFetchingBook} from "../../redux/searchBooksSelectors";
import {Col, Empty, Row} from "antd";
import styles from "./Book.module.css"
import bookPlaceholder from "../../assets/images/book-placeholder.png";
import {useHistory} from "react-router-dom";
import {getBook} from "../../redux/searchBooksReducer";
import Preloader from "../common/Preloader/Preloader";
import preloader300px from "../../assets/images/Preloader300px.svg";

export const Book: React.FC = React.memo(() => {

    const bookInfo = useSelector(selectBookInfo);
    const isFetchingBook = useSelector(selectIsFetchingBook);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        // get book id from url
        const booksId = history.location.pathname.split('/')[2];
        if (booksId && booksId.length > 0) {
            if (!bookInfo) {
                dispatch(getBook(booksId))
            }
        }
    },[]);

    if (isFetchingBook) {
        return <Preloader src={preloader300px} />
    }

    if (bookInfo) {
        return (
            <div className={styles.wrapper}>
                <Row>
                    <Col className={styles.coverWrapper} span={5}>
                        <img src={bookInfo.volumeInfo.imageLinks?.thumbnail
                            ? bookInfo.volumeInfo.imageLinks?.thumbnail : bookPlaceholder} alt="book's cover"/>
                    </Col>
                    <Col span={15}>
                        {
                            bookInfo.volumeInfo.categories &&
                            <div className={styles.categories}>{bookInfo.volumeInfo.categories.join(' / ')}</div>
                        }

                        <div className={styles.title}><b>{bookInfo.volumeInfo.title}</b></div>

                        {
                            bookInfo.volumeInfo.authors &&
                            <div className={styles.authors}>{bookInfo.volumeInfo.authors.join(', ')}</div>
                        }
                        <div className={styles.description}>{bookInfo.volumeInfo.description}</div>
                    </Col>
                </Row>
            </div>
        );
    } else {
        return (
            <Empty />
        );
    }
})
