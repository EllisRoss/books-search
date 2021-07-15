import { Book } from "../types/types";
import {AppStateType} from "./store";

export const selectBooks = (state: AppStateType): Book[] => {
    return state.searchBooksPage.books;
}

export const selectSearchResults = (state: AppStateType): number => {
    return state.searchBooksPage.searchResults;
}

export const selectIsFetching = (state: AppStateType): boolean => {
    return state.searchBooksPage.isFetching;
}
export const selectPageSize = (state: AppStateType): number => {
    return state.searchBooksPage.pageSize;
}
