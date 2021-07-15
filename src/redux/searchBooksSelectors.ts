import { Book, Filter } from "../types/types";
import {AppStateType} from "./store";

export const selectBooks = (state: AppStateType): Book[] => {
    return state.searchBooksPage.books;
}
export const selectSearchResults = (state: AppStateType): number => {
    return state.searchBooksPage.searchResults;
}
export const selectIsFetchingBooks = (state: AppStateType): boolean => {
    return state.searchBooksPage.isFetchingBooks;
}
export const selectIsFetchingMoreBooks = (state: AppStateType): boolean => {
    return state.searchBooksPage.isFetchingMoreBooks;
}
export const selectPageSize = (state: AppStateType): number => {
    return state.searchBooksPage.pageSize;
}
export const selectFilter = (state: AppStateType): Filter | null => {
    return state.searchBooksPage.filter;
}
export const selectBookInfo = (state: AppStateType): Book | null => {
    return state.searchBooksPage.bookInfo;
}
