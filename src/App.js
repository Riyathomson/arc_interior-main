import React from 'react';
import Home from './pages/home';
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import './App.css';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Shop from './pages/shop';
import Projects from './pages/projects';
import Bloglist from './pages/bloglist';
import Blogdetail from './pages/blogdetail';


export default function App() {
  return (
    <Router>
        <Switch>





        <Route path="/shop"  component={Shop}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/projects"  component={Projects}/>
        <Route path="/blog"  component={Bloglist}/>
        <Route path="/blog"  component={Blogdetail}/>
        <Route path="/services"  component={Services}/>
        <Route path="/about"  component={About}/>
        <Route path="/"  component={Home}/>

         </Switch>
    </Router>
  );
}


