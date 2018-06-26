import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/UI/navbar';
import MovieList from './components/MovieList/movie-list';
import Homepage from './components/Homepage/homepage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/movielist" component={MovieList}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
