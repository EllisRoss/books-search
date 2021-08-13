import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectBookInfo} from "../../redux/searchBooksSelectors";
import {Col, Row} from "antd";
import styles from "./Book.module.css"
import bookPlaceholder from "../../assets/images/book-placeholder.png";
import {useHistory} from "react-router-dom";
import {getBook} from "../../redux/searchBooksReducer";

export const Book: React.FC = React.memo(() => {

    const bookInfo = useSelector(selectBookInfo);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        // get book id from url
        const booksId = history.location.pathname.split('/')[2];
        if (!bookInfo && booksId) {
            dispatch(getBook(booksId))
        }
    },[]);

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
    }

    return (
        <div>
            Something wrong
        </div>
    );
})
