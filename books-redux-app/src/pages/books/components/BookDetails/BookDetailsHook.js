import React, { useEffect, useState} from "react";
import { getDetails } from "../../../../api/books";
import { Link, useParams  } from 'react-router-dom';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Spinner } from "reactstrap";


const BookDetailsHook = () => {
    const [bookList, setBookList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getDetails(id)
            .then(({ data }) => {
                setBookList(data);
                setLoading(false);
            })
            .catch(() => setError(true));
           
    })


    return (
        !loading &&
            < Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">{bookList.title}</h1>
                    <p className="lead">{bookList.description}</p>
                    <hr className="my-2" />
                    <p>{bookList.excerpt}</p>
                    <Link to={"/booklist"}>
                        <Button>Go back</Button>
                    </Link>
                    {loading && <Spinner color="secondary" children="" />}
                </Container>
            </Jumbotron >
    )
}

export default BookDetailsHook;