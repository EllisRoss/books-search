import axios from "axios";
import { Book, Categories, SortingBy } from "../types/types";

const apiKey = 'AIzaSyCu8udk6K9EHsV4AZHSJPxNO7B13Ka77A0';

export const searchBooksAPI = {
    getBooks: (query: string, categories: Categories, sortingBy: SortingBy, startIndex = 0) => {
        console.log(`https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${categories}&key=${apiKey}&maxResults=30&startIndex=${startIndex}&orderBy=${sortingBy}`)
        if (categories === "all") {
            return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}
            &key=${apiKey}&maxResults=30&startIndex=${startIndex}&orderBy=${sortingBy}`)
                .then(response => response.data);
        }
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${categories}
            &key=${apiKey}&maxResults=30&startIndex=${startIndex}&orderBy=${sortingBy}`)
            .then(response => response.data);
    }
}

export type GetBooksResponseData = {
    items: Book[],
    kind: string,
    totalItems: number,
}