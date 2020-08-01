import React from 'react';
import Home from './screens/Home';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './component/Header/Header';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App bg-gray-800 h-screen">
      <Router>
        <Header/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
