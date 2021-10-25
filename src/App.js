import './App.scss';
import ToDoList from './components/ToDoList';
import ValidatedForm from './components/ValidatedForm';
import FinalForm from './components/FinalForm';
import PageNotFound from './components/PageNotFound';

import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <aside>
          <ul className="nav-bar">
            <li><NavLink activeClassName="nav-active" to="/"></NavLink></li>
            <li><NavLink activeClassName="nav-active" to="/ToDoList">ToDo List</NavLink></li>
            <li><NavLink activeClassName="nav-active" to="/validated-form">Validated Form</NavLink></li>
            <li><NavLink activeClassName="nav-active" to="/final-form">Final Form</NavLink></li>
          </ul>
        </aside>
        <header className="App-header">
          <Switch>
            <Route exact path="/" />
            <Route exact path="/ToDoList" component={ToDoList} />
            <Route exact path="/validated-form" component={ValidatedForm} />
            <Route exact path="/final-form" component={FinalForm} />
            <Route component={PageNotFound} />
          </Switch>
        </header>

      </div>
    </Router>

  );
}

export default App;
