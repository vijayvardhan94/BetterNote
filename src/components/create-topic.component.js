import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTopic extends Component {
  constructor(props) {
    super(props);

    this.onChangeTopicname = this.onChangeTopicname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      topicname: ''
    }
  }

  onChangeTopicname(e) {
    this.setState({
      topicname: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const topic = {
      topicname: this.state.topicname
    }

    console.log(topic);

    axios.post('http://localhost:5000/topics/add', topic)
      .then(res => console.log(res.data));

    this.setState({
      topicname: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Topic</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Topicname: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.topicname}
                onChange={this.onChangeTopicname}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Topic" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}