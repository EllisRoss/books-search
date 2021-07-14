import {Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { selectBooks } from '../../redux/searchBooksSelectors';
import styles from "./Book.module.css";
import bookPlaceholder from "../../common/images/book-placeholder.png";

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

    const books = useSelector(selectBooks);

    // return array of div with styles from string array
    const printItemsList = (items: string[], style: string): JSX.Element[] => {
        const itemsList = items.map((item, index) => {
            return <div key={index} className={style}>{item}</div>
        })
        return itemsList;
    }

    return (
        <div className={styles.wrapper}>
            <List
                grid={{ gutter: 16, column: col }}
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
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
})
