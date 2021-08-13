import axios from "axios";
import { Book, Categories, SortingBy } from "../types/types";

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
})

const apiKey = 'AIzaSyCu8udk6K9EHsV4AZHSJPxNO7B13Ka77A0';

export const searchBooksAPI = {
    getBooks: (query: string, categories: Categories, sortingBy: SortingBy, startIndex = 0) => {
        if (categories === "all") {
            return instance.get(`?q=${query}
            &key=${apiKey}&maxResults=30&startIndex=${startIndex}&orderBy=${sortingBy}`)
                .then(response => response.data);
        }
        return instance.get(`?q=${query}+subject:${categories}
            &key=${apiKey}&maxResults=30&startIndex=${startIndex}&orderBy=${sortingBy}`)
            .then(response => response.data);
    },
    getBook: (id: string) => {
        return instance.get(`/${id}?key=${apiKey}`).then(response => response.data);
    }
}

export type GetBooksResponseData = {
    items: Book[],
    kind: string,
    totalItems: number,
}