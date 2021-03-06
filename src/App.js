import React from 'react';
import './reset.css'
import './App.css';
import Wizard from './Components/Wizard/Wizard';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header'
import {HashRouter} from 'react-router-dom'
import routes from './routes'



function App() {
  return (
    <HashRouter>
        <div className="App">
            <Header/>     
            {routes}  
        </div>
    </HashRouter>
  );
}

export default App;
