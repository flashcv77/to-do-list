import './App.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, NavLink as ReactLink } from 'react-router-dom';
import BookItem from './pages/books/components/BookItem';
import HomePage from './pages/HomePage/HomePage';
// import APIComponent from './APIComponent';
import Books from './pages/books/components/Books';
import BookDetails from './pages/books/components/BookDetails';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar color="dark" expand="md" >
          <Nav>
            <NavItem>
              <NavLink
                exact tag={ReactLink} to="/" activeClassName="active" className="link-light">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact tag={ReactLink} to="/booklist" ctiveClassName="active" className="link-light">
                Books
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>

          <Route exact path="/booklist" component={Books} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/books/:id" component={BookDetails} />
        </Switch>
      </Router>
      {/* <APIComponent/> */}
    </div>
  );
}

export default App;
