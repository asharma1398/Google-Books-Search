import React, { useState } from "react";
import API from "../utils/API"
import "./Search.css"

function Search() {

    const [searchTerm, setSearchTerm] = useState("");

    const [books, setBooks] = useState([]);

    const searchGoogleBooks = (e) => {
        e.preventDefault();
        console.log(searchTerm);

        API.getBooks(searchTerm).then(function (response) {
            console.log(response.data.items)
            setBooks(response.data.items)
        })
    }

    const handleClick = (id) => {
        console.log(id);
        let book = books.find(item => item.id === id)

        console.log(book);

        let finalBook = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors[0],
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        }

        API.saveBook(finalBook).then(function (response){
            console.log(response)
        }).catch(err => {
            throw err 
        })

    }

    return (
        <>
            <div class="jumbotron container">
                <h1 class="display-4">Google Books Search</h1>
                <p class="lead">Search for and Save Books of Interest</p>
            </div>

            <div class="jumbotron container">
                <h1 class="display-4">Book Search</h1>
                <form onSubmit={searchGoogleBooks}>
                    <div class="form-group">
                        <input onChange={e => setSearchTerm(e.target.value)} value={searchTerm} type="text" class="form-control" />
                        <button className="btn-primary w-25 mt-2">Search</button>
                    </div>
                </form>
            </div>

            <div class="container-fluid container">
                <h2>Results</h2>
                <div>
                    {books.map((book, index) => (
                        <div className="book-area" key={index}>
                            <div className="title-info">
                                <div className="author-info">
                                    <h3>{book.volumeInfo.title}</h3>
                                    <div className="author-name">
                                        <h4 style={{ marginRight: "5px" }}>By </h4>

                                        {book.volumeInfo.authors.map((author, index) => (
                                            <div>
                                                {(index === book.volumeInfo.authors.length - 1) &&

                                                    <h4 key={index}> {author} </h4>

                                                }
                                                {(index !== book.volumeInfo.authors.length - 1) &&

                                                    <h4 style={{ marginRight: "5px" }} key={index}> {author}, </h4>

                                                }
                                                
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className="button-info">
                                    <button style={{ marginRight: "10px" }}><a href={book.volumeInfo.infoLink} target="_blank">View</a></button>

                                    <button href="#" id={book.id} onClick={() => handleClick(book.id)}>Save</button>
                                </div>
                            </div>

                            <div className="img-desc">
                                <img src={book.volumeInfo.imageLinks.thumbnail} style={{ width: "20%", marginRight: "10px", height: "200px" }} />
                                <p>{book.volumeInfo.description}</p>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}

export default Search;