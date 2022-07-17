import React from 'react';
import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';

import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
          <Header />
          <Route exact path='/' component={NotesListPage}/>
          <Route path='/note/:id' component={NotePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
