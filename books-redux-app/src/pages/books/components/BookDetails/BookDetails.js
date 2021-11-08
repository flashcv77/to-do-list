import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Spinner } from "reactstrap";
import { getDetailsThunk } from "../../../../store";
import {  useDispatch, useSelector } from "react-redux";


const BookDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const { loading, books } = useSelector((state) => {
        return state.bookDetailsReducer
    })
    useEffect(() => {
        dispatch(getDetailsThunk(id));
    }, [id, dispatch]);


    return (
        < Jumbotron fluid>
            {loading &&
                <Spinner color="secondary" children="" />}
            <Container fluid>
                <h1>{books.title}</h1>
                <p>{books.description}</p>
                <hr />
                <p>{books.excerpt}</p>
                <Link to={"/booklist"}>
                    <Button>Go back</Button>
                </Link>
            </Container>
        </Jumbotron >
    )
}

export default BookDetails;