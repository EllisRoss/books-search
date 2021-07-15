import axios from "axios";
import { Book } from "../types/types";

const apiKey = 'AIzaSyCu8udk6K9EHsV4AZHSJPxNO7B13Ka77A0';

export const searchBooksAPI = {
    getBooks: (query: string, categories: Categories, sortingBy: SortingBy) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+${categories}&key=${apiKey}&maxResults=10&startIndex=0&orderBy=${sortingBy}`)
            .then(response => response.data);
    }
}

export type GetBooksResponseData = {
    items: Book[],
    kind: string,
    totalItems: number,
}

export type Categories = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry';
export type SortingBy = 'relevance' | 'newest';