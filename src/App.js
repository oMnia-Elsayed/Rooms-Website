import React from 'react';
import './App.css';

import Home from './Pages/Home/Home';
import Rooms from './Pages/Rooms/Rooms';
import SingleRoom from './Pages/SingleRoom/SingleRoom';
import Error from './Pages/Error/Error';

import { Route , Switch } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';


function App() {
  return ( 
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />  
        <Route exact component={Error}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
