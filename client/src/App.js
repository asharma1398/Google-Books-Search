import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

function App() {
    return (
        <Router>
            <main className="container-md">
            <Nav />
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            </main>
            
        </Router>
    )
}

export default App;