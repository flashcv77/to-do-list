import React from "react";
import { getDetails } from "../../../../api/books";
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Spinner } from "reactstrap";
import { getDetailsThunk } from "../../../../store";
import { connect } from "react-redux";

export class BookDetails extends React.Component {
    
    // state = {
    //     bookList: [],
    //     loading: true,
    //     error: false,
    // }

    componentDidMount() {
       this.props.fetchDetails(this.props.match.params.id)
    //    console.log("->",this.props);
    }

    render() {
        const { title, description, excerpt } = this.props.bookList.books;
        const {loading} = this.props;
        // console.log(this.state.bookList);
        // console.log(this.props.bookList);
        return (
            
            // !loading &&
            
            < Jumbotron fluid>
                {/* {!loading && 
                <Spinner color="secondary" children="" />} */}
                <Container fluid>
                    <h1 className="display-3">{title}</h1>
                    <p className="lead">{description}</p>
                    <hr className="my-2" />
                    <p>{excerpt}</p>
                    <Link to={"/booklist"}>
                        <Button>Go back</Button>
                    </Link>
                    
                </Container>
            </Jumbotron >
        )
    }
}

const mapStateToProps = (state) => {
    console.log("-------->",state.bookDetailsReducer );
    return {
        bookList: state.bookDetailsReducer  
        }
}

const mapDispatchToProps = (dispatch) => {
    // console.log("check");
    return {
        fetchDetails: (id) => dispatch(getDetailsThunk(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);