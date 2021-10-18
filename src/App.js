import './App.css';
import ToDoList from './components/ToDoList';
import FirstComponent from './components/FirstComponent';
import ValidatedForm from './components/ValidatedForm';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        {/* TO DO LIST */}
        {/* <ToDoList /> */}
        {/* <div className="wrapper"><FirstComponent CHECK/></div> */}
        <ValidatedForm />
      </header>

    </div>
  );
}

export default App;
