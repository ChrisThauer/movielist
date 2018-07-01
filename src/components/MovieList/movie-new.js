import React, { Component } from 'react';
import firebase from '../../firebase';

class MovieNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      score: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const userId = this.props.user.uid;
    const movieRef = firebase.database().ref(userId);
    const movie = {
      title: this.state.title,
      score: this.state.score
    }
    movieRef.push(movie);
    this.setState({
      title: '',
      score: ''
    })
  }

  render() {
    return (
      <div className="container">
        {this.props.user ?
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input type="text" name="title" className="form-control" onChange={this.handleChange}
                     value={this.state.title}/>
            </div>
            <div className="form-group">
              <label>Review Score</label>
              <select className="form-control" name="score" onChange={this.handleChange} value={this.state.score}>
                <option>Select a Score</option>
                <option>10</option>
                <option>9.5</option>
                <option>9</option>
                <option>8.5</option>
                <option>8</option>
                <option>7.5</option>
                <option>7</option>
                <option>6.5</option>
                <option>6</option>
                <option>5.5</option>
                <option>5</option>
                <option>4.5</option>
                <option>4</option>
                <option>3.5</option>
                <option>3</option>
                <option>2.5</option>
                <option>2</option>
                <option>1.5</option>
                <option>1</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Movie</button>
          </form>
          :
          <p>Please login to add add movies to your list!</p>
        }
      </div>
    );
  }
}

export default MovieNew;