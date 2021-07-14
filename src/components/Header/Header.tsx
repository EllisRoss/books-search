import React from 'react';
import 'antd/dist/antd.css';
import {Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './Header.module.css'


export const Header: React.FC = React.memo(() => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <b>Search for books</b>
            </div>

            <div className={styles.input}>
                <Input />
            </div>
            <div className={styles.button}>
                <Button shape="circle" icon={<SearchOutlined/>}/>
            </div>
        </div>
    );
})
