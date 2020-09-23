import React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import "./App.scss"
import {
  Switch,
  Route
} from "react-router-dom";
function App() {


  return (
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/" component={Home}/>
    </Switch>
    
  );
}

export default App;
