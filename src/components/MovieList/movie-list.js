import React, {Component} from 'react';
import firebase from '../../firebase';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    const userId = this.props.user ? this.props.user.uid : '';
    const moviesRef = firebase.database().ref(userId);
    moviesRef.on('value', snapshot => {
      let movies = snapshot.val();
      let newState = [];
      for (let movie in movies) {
        newState.push({
          id: movie,
          title: movies[movie].title,
          score: movies[movie].score
        });
      }
      this.setState({
        movies: newState
      })
    })
  }


  render() {
    return (
      <div className="container">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Review Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieList;