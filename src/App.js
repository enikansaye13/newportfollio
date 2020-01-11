import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div>
     <BrowserRouter >
     <Header />
     <Route exact path='/' component = {Home} />
     <Route exact path='/About' component = {About} />
     <Route exact path='/Project' component = {Project} />
     <Route exact path='/Contact' component = {Contact} />
     <Footer />
     </BrowserRouter> 
    </div>
  );
}

export default App;
