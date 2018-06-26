import React, {Component} from 'react';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          title: 'Back to the Future',
          rating: '9'
        },
        {
          title: 'Star Wars',
          rating: '10'
        }
      ]
    }
  }


  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Review Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr>
                <td>{movie.title}</td>
                <td>{movie.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieList;