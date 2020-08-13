import axios from "axios";

export default {

    getBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },

    getSavedBook: function() {
        return axios.get("/api/books");
    },

    saveBook: function(bookData) {

        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
    
}