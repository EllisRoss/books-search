import axios from "axios";
import {Book} from "../types/types";

const apiKey = 'AIzaSyCu8udk6K9EHsV4AZHSJPxNO7B13Ka77A0';

export const searchBooksAPI = {
    getBooks: (query: string) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=10&startIndex=0`)
            .then(response => response.data);
    }
}

export type GetBooksResponseData = {
    items: Book[],
    kind: string,
    totalItems: number,
}