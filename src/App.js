import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
 
import './App.css'
import FeaturedCard from './Components/Card/FeaturedCard';
import AppBar from './Components/AppBar/AppBar';
import About from './Components/About/About';
import News from './Components/News/News';
import Admin from './Components/Admin/Index';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Switch>
        <Route exact path='/' component={FeaturedCard}/>
        <Route path='/about' component={About}/>
        <Route path='/news' component={News}/>
        <Route path='/admin' component={Admin}/>
      </Switch>
      {/* <div className="Cards">
      <FeaturedCard/>
      <FeaturedCard/>
      </div> */}
    </div>
  );
}

export default App;
