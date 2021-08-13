import React from 'react';
import 'antd/dist/antd.css';
import {SearchOutlined} from '@ant-design/icons';
import styles from './Header.module.css'
import {useDispatch} from "react-redux";
import {getBooks} from "../../redux/searchBooksReducer";
import {Filter} from '../../types/types';
import {Form, Formik, FormikHelpers} from 'formik';
import {Input, Select, SubmitButton} from 'formik-antd';
import {Col, Row} from "antd";
import {useHistory} from "react-router-dom";

type FormErrors = {
    query?: string
}
type FormValues = Filter;


export const Header: React.FC = () => {

    const dispatch = useDispatch();
    const history = useHistory();


    const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        actions.setSubmitting(false);
        dispatch(getBooks(values.query, values.category, values.sortBy))
        history.push('/');
    }

    const initialValues: FormValues = {query: '', category: 'all' , sortBy: 'relevance'}

    return (
        <div className={styles.header}>
            <div>
                <div className={styles.header__title}>
                    <b>Search for books</b>
                </div>
                <Formik
                    initialValues = {initialValues}
                    validate={values => {
                        const errors: FormErrors = {};
                        if (!values.query) {
                            errors.query = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={onSubmit}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <div className={styles.header__search}>
                                <Input name="query" className={styles.header__input}/>


                                <SubmitButton shape="circle"
                                              disabled={isSubmitting}
                                              className={styles.header__button}
                                              icon={<SearchOutlined/>}/>
                            </div>
                            <div className={styles.header__filter}>
                                <Row>
                                    <Col>
                                        <div className={styles.header__category}>
                                            <label className={styles.header__label}>Categories</label>
                                            <Select className={styles.header__select} name="category">
                                                <Select.Option value="all">all</Select.Option>
                                                <Select.Option value="art">art</Select.Option>
                                                <Select.Option value="biography">biography</Select.Option>
                                                <Select.Option value="computers">computers</Select.Option>
                                                <Select.Option value="history">history</Select.Option>
                                                <Select.Option value="medical">medical</Select.Option>
                                                <Select.Option value="poetry">poetry</Select.Option>
                                            </Select>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className={styles.header__sort}>
                                            <label className={styles.header__label}>Sorting by</label>
                                            <Select className={styles.header__select} name="sortBy">
                                                <Select.Option value="relevance">relevance</Select.Option>
                                                <Select.Option value="newest">newest</Select.Option>
                                            </Select>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}