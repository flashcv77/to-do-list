import './App.css';
import ToDoList from './components/ToDoList';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        TO DO LIST
        <ToDoList />
        <div className="wrapper"><FirstComponent /></div>

      </header>

    </div>
  );
}

export default App;
