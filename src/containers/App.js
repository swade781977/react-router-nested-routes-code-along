import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MoviesPage from './MoviesPage';

class App extends Component {

  state = {
    movies: {
      1: { id: 1, title: 'A River Runs Through It' },
      2: { id: 2, title: 'Se7en' },
      3: { id: 3, title: 'Inception' }
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
          {/*Above, we've imported MovieShow and added a Route component. 
          You will notice that we are now inheriting match from this.props. 
          This comes from the routerProps passed in from App. This is a POJO (plain old Javascript object) 
          that contains the current URL. Using match, we can show stuff depending on what the match.url returns. 
          We do this because we want the Route inside MoviesPage to match the exact URL 
          that caused MoviesPage to render, plus :movieId. :movieId represents a parameter. 
          If we visit http://localhost:3000/movies/1, the movieId parameter would be "1". 
          */}
        </div>
      </Router>
    );
  }
}

export default App;
