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
     <Route exact path='/' component = {About} />
     <Route exact path='/' component = {Project} />
     <Route exact path='/' component = {Contact} />
     <Footer />
     </BrowserRouter> 
    </div>
  );
}

export default App;
