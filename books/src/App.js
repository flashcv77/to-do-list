import './App.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route , NavLink, NavLink as ReactLink} from 'react-router-dom';
import BookItem from './pages/books/components/BookItem';
import HomePage from './pages/HomePage/HomePage';
// import APIComponent from './APIComponent';
import Books from './pages/books/components/Books';
import BookDetails from './pages/books/components/BookDetails';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar color="dark" light expand="md" >
          {/* <NavLink tag={ReactLink} to="/" activeClassName="active" href="/">Home</NavLink> */}
          <NavbarBrand className="text-info" href="/">Home</NavbarBrand>
          <NavbarBrand  className="text-info" href="/booklist">Books</NavbarBrand>
        </Navbar>
        <Switch>
          
          <Route exact path="/booklist" component={Books} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/bookdetails/:id" component={BookDetails} />
        </Switch>
      </Router>
      {/* <APIComponent/> */}
    </div>
  );
}

export default App;
