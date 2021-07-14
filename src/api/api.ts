import axios from "axios";

const apiKey = 'AIzaSyCu8udk6K9EHsV4AZHSJPxNO7B13Ka77A0';

export const searchBooksAPI = {
    getBooks: (query: string) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
    }
}