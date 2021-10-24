import './App.css';
import ToDoList from './components/ToDoList';
import FirstComponent from './components/FirstComponent';
import ValidatedForm from './components/ValidatedForm';
import FinalForm from './components/FinalForm/FinalForm';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        
        {/* TO DO LIST */}
        {/* <ToDoList /> */}
        {/* <div className="wrapper"><FirstComponent CHECK/></div> */}
        {/* <ValidatedForm /> */}
        <FinalForm/>
      </header>

    </div>
  );
}

export default App;
