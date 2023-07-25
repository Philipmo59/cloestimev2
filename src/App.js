import React, { useEffect, useState } from 'react';
import {Route, Switch} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/NavBar';
import ClosetContainer from './components/ClosetContainer';
import Post from './components/Post';

function App() {
  const [clothes,setClothes] = useState([])
  
  const getData = () => {
    fetch("http://localhost:3000/toys",{
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
      }
   })
  .then(response => response.json())
  .then(data => setClothes(data))
  }

  useEffect(()=>{
    getData()
  },[])


  
  return(
    <div>
      <Navbar/>
      <Post/>
      <Switch>
        <Route exact path="/Home">
          <ClosetContainer clothes={clothes}/>
        </Route>
        <Route exact path ="/About">
          <About/>
        </Route>
        <Route exact path ="/Contact">
          <Contact/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
