import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ModalClassBased from './components/ModalClassBased/ModalClassBased';
import ModalRedux from './components/ModalRedux/ModalRedux';
import { useSelector } from 'react-redux';

function App() {

  const store = useSelector(state => state.show)

  return (
    <div className="App">
      <div className="half-container">
        <h2>Class based</h2>
        <ModalClassBased />
      </div>
      <div className="half-container">
        <h2>Redux</h2>
        <h2>{store}</h2>
        <ModalRedux />
      </div>

    </div>
  );
}

export default App;
