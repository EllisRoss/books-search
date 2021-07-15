import React from 'react';
import {useSelector} from "react-redux";
import {selectBookInfo} from "../../redux/searchBooksSelectors";
import {Col, Row} from "antd";
import styles from "./Book.module.css"


export const Book: React.FC = React.memo(() => {

    const bookInfo = useSelector(selectBookInfo);

    if (bookInfo) {
        return (
            <div className={styles.wrapper}>
                <Row>
                    <Col className={styles.coverWrapper} span={5}>
                        <img src={bookInfo.volumeInfo.imageLinks?.thumbnail} alt=""/>
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
