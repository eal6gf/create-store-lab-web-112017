import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    hometown: '',
    username: ''
  }

  handleHometown = (e) => {
    this.setState({
      hometown: e.target.value
    })
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' placeholder='username' onChange={this.handleUsername} ></input>
          <input type='text' name='hometown' placeholder='hometown' onChange={this.handleHometown} ></input>

          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default UserInput;
