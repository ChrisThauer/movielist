import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { auth, provider } from './firebase';
import Navbar from './components/UI/navbar';
import MovieList from './components/MovieList/movie-list';
import LandingPage from './components/LandingPage/landing-page';
import MovieNew from './components/MovieList/movie-new';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    })
  }

  login() {
    auth.signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        console.log(user.email);
        this.setState({
          user
        })
      })
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar user={this.state.user} login={this.login} logout={this.logout}/>
          <Switch>
            <Route
              path="/movielist/new"
              render={props => <MovieNew {...props} user={this.state.user}/>}
            />
            <Route
              path="/movielist"
              render={props => <MovieList {...props} user={this.state.user} />}
            />
            <Route
              path="/"
              render={props => <LandingPage {...props} user={this.state.user}/>}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
