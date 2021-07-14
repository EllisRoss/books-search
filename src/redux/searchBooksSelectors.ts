import { Book } from "../types/types";
import {AppStateType} from "./store";

export const selectBooks = (state: AppStateType): Book[] => {
    return state.searchBooksPage.books;
}