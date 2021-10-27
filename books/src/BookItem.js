import React from "react";
import { Card, CardBody, CardTitle, CardText, Button, Col } from "reactstrap";
import { Link } from 'react-router-dom';

const BookItem = ({ id, title, excerpt }) => (

    <Col xs="4" key={id} >
        <Card >
            {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText>{excerpt}</CardText>
                <Link to={`/bookitem/${id}`}>
                    <Button>Details</Button>
                </Link>
            </CardBody>
        </Card>
    </Col>

)

export default BookItem;