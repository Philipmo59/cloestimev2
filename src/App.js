import React, { useEffect, useState } from 'react';
import {Route, Switch} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/NavBar';

function App() {
  return(
    <div>
      <NavBar/>
      <Switch>
        <Route exact path ="/About">
           <About />
        </Route>
        <Route exact path ="/Contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
