import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./Search.css"

function Saved() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        API.getSavedBook().then(function (response) {
            console.log(response.data);
            setBooks(response.data)
        });
    }, []);

    const deleteBook = (id) => {
        let book = books.find(book => book.id === id)

        API.deleteBook(book._id)
        window.location.reload();

    }

    return (
        <>
            <div class="jumbotron container">
                <h1 class="display-4">Google Books Search</h1>
                <p class="lead">Search for and Save Books of Interest</p>
            </div>

            <div class="container-fluid container">
                <h2>Saved books</h2>
                <div>
                    {books.map((book, index) => (
                        <div className="book-area" key={index}>
                            <div className="title-info">
                                <div className="author-info">
                                    <h3>{book.title}</h3>
                                    <div className="author-name">
                                        <h4 style={{ marginRight: "5px" }}>By </h4>

                                        {book.authors.map((author, index) => (
                                            <div>
                                                {(index === book.authors.length - 1) &&

                                                    <h4 key={index}> {author} </h4>

                                                }
                                                {(index !== book.authors.length - 1) &&

                                                    <h4 style={{ marginRight: "5px" }} key={index}> {author}, </h4>

                                                }
                                                
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className="button-info">
                                    <button style={{ marginRight: "10px" }}><a href={book.link} target="_blank">View</a></button>

                                    <button href="#" id={book.id} onClick={() => deleteBook(book.id)}>Delete</button>
                                </div>
                            </div>

                            <div className="img-desc">
                                <img src={book.image} style={{ width: "20%", marginRight: "10px" }} />
                                <p>{book.description}</p>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </>
    )

}

export default Saved;