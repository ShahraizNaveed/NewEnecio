import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css"
import { Container } from "react-bootstrap";

const Search = () => {
    window.scrollTo(0, 0);
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate()

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            // navigate(`/products/${keyword}`);
            navigate(`/`);
        } else {
            navigate("/");
        }
    };

    return (
        <section className="searchBox">
            <Container>
                <form className="search-form" onSubmit={searchSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Search a Product ..."
                        className="text-input"
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <input className="submit-input" type="submit" value="Search" />
                </form>
            </Container>
        </section>
    );
};

export default Search;
