import React from 'react';
import './App.css';
import UtterPage from "./UtterPage"
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={UtterPage} />
      </Router>
    </div>
  );
}

export default App;
