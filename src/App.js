import React from 'react';
import './App.css';

import Home from './Components/Home/Home';
import Rooms from './Components//Rooms/Rooms';
import SingleRoom from './Components/SingleRoom/SingleRoom';
import Error from './Components/Error/Error';

import { BrowserRouter , Route , Switch } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';


function App() {
  return ( 
    <>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/single-room" component={SingleRoom} />  
        <Route exact component={Error}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
