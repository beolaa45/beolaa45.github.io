import React, { Component, Fragment } from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"
import {
  Switch,
  Route
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Detail from './components/Detail/Detail';

class App extends Component {

 

 render(){
  let routes = (
    <Switch>
      <Route path="/blog" component={About}/>
      <Route path="/products/:slug" component={Detail}/>
      <Route path="/products" component={Products}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/" exact component={Home}/>
    </Switch>
  )
  return (
    <Fragment>
      <Layout>
        {routes}
      </Layout>
    </Fragment>
  );
 }
}

export default App;
