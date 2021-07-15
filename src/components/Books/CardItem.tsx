import React from "react";
import styles from "./Books.module.css";
import bookPlaceholder from "../../assets/images/book-placeholder.png";
import {Card} from "antd";
import {Book, BookVolumeInfo} from "../../types/types";

export const CardItem: React.FC<CardItemProps> = React.memo(({itemInfo}) => {
    return (
        <div>
            <Card hoverable={true} className={styles.cardWrapper}>
                <div>
                    <div className={styles.cover}>
                        {
                            itemInfo.imageLinks &&
                            <img src={itemInfo.imageLinks?.thumbnail} alt=""/>
                        }

                        {
                            !itemInfo.imageLinks &&
                            <img src={bookPlaceholder} alt=""/>
                        }
                    </div>

                    {
                        itemInfo.categories &&
                        <div className={styles.categories}>{itemInfo.categories[0]}</div>
                    }
                    {
                        itemInfo.title.length > 30 &&
                        <div
                            className={styles.title}>{itemInfo.title.substr(0, 30) + '...'}</div>
                    }
                    {
                        itemInfo.title.length <= 30 &&
                        <div className={styles.title}>{itemInfo.title}</div>
                    }

                    {
                        itemInfo.authors &&
                        <div className={styles.authors}>{itemInfo.authors.join(', ')}</div>
                    }
                </div>
            </Card>
        </div>
    );
})

type CardItemProps = {
    itemInfo: BookVolumeInfo;
}