import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {SearchOutlined} from '@ant-design/icons';
import styles from './Header.module.css'
import {useDispatch} from "react-redux";
import {getBooks} from "../../redux/searchBooksReducer";
import {Filter} from '../../types/types';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {Input, Select, SubmitButton} from 'formik-antd';
import {Col, Row} from "antd";

type FormErrors = {
    query?: string
}
type FormValues = Filter;


export const Header: React.FC = () => {

    const dispatch = useDispatch();


    const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        actions.setSubmitting(false);
        dispatch(getBooks(values.query, values.category, values.sortBy))
    }

    const initialValues: FormValues = {query: '', category: 'all' , sortBy: 'relevance'}

    return (
        <div className={styles.background}>
            <div>
                <div className={styles.heading}>
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
                            <div className={styles.header}>
                                <Input name="query" className={styles.input}/>


                                <SubmitButton shape="circle"
                                              disabled={isSubmitting}
                                              className={styles.button}
                                              icon={<SearchOutlined/>}/>
                            </div>
                            <Row>
                                <Col>
                                    <label className={styles.categoriesLabel}>Categories</label>
                                    <Select className={styles.categoriesSelect} name="category">
                                        <Select.Option value="all">all</Select.Option>
                                        <Select.Option value="art">art</Select.Option>
                                        <Select.Option value="biography">biography</Select.Option>
                                        <Select.Option value="computers">computers</Select.Option>
                                        <Select.Option value="history">history</Select.Option>
                                        <Select.Option value="medical">medical</Select.Option>
                                        <Select.Option value="poetry">poetry</Select.Option>
                                    </Select>
                                </Col>
                                <Col>
                                    <label className={styles.sortingLabel}>Sorting by</label>
                                    <Select className={styles.sortingSelect} name="sortBy">
                                        <Select.Option value="relevance">relevance</Select.Option>
                                        <Select.Option value="newest">newest</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}