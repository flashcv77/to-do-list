import './App.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookList from './BookList';
import BookItem from './BookItem';
import HomePage from './HomePage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarBrand href="/booklist">Books</NavbarBrand>
          {/* <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarBrand href="/booklist">Books</NavbarBrand> */}
        </Navbar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/booklist" component={BookList} />
          <Route exact path="bookitem/:id" component={BookItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
