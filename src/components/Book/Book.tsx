import React from 'react';
import {useSelector} from "react-redux";
import {selectBookInfo} from "../../redux/searchBooksSelectors";
import {Col, Row} from "antd";
import styles from "./Book.module.css"
import bookPlaceholder from "../../assets/images/book-placeholder.png";


export const Book: React.FC = React.memo(() => {

    const bookInfo = useSelector(selectBookInfo);

    const bookCover = (): string | undefined => {
        if (bookInfo) {
            if (bookInfo.volumeInfo.imageLinks?.extraLarge) {
                return bookInfo.volumeInfo.imageLinks?.extraLarge;
            }
            if (bookInfo.volumeInfo.imageLinks?.large) {
                return bookInfo.volumeInfo.imageLinks?.large;
            }
            if (bookInfo.volumeInfo.imageLinks?.medium) {
                return bookInfo.volumeInfo.imageLinks?.medium;
            }
            if (bookInfo.volumeInfo.imageLinks?.small) {
                return bookInfo.volumeInfo.imageLinks?.small;
            }
            if (bookInfo.volumeInfo.imageLinks?.thumbnail) {
                return bookInfo.volumeInfo.imageLinks?.thumbnail;
            }
        }
        return undefined;
    }

    if (bookInfo) {
        return (
            <div className={styles.wrapper}>
                <Row>
                    <Col className={styles.coverWrapper} span={5}>
                        <img src={bookCover() ? bookCover() : bookPlaceholder} alt="book's cover"/>
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
