import React, { useState } from "react";

function Saved() {

    const [books, setBooks] = useState([]);

    return (
        <>
        <div class="jumbotron container">
          <h1 class="display-4">Google Books Search</h1>
          <p class="lead">Search for and Save Books of Interest</p>
        </div>

        <div class="container-fluid">
            <h2>Saved Books</h2>
                <div>
                    <div className="titleSaved">

                    </div>
                    <div className="savePageBTN">

                    </div>
                </div>
        </div>
        </>
    )

}

export default Saved;