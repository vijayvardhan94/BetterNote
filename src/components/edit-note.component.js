import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditNote extends Component {
  constructor(props) {
    super(props);

    this.onChangeTopicname = this.onChangeTopicname.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      topicname: '',
      title: '',
      description: '',
      date: new Date(),
      topics: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/notes/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          topicname: response.data.topicname,
          title: response.data.title,
          description: response.data.description,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/topics/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            topics: response.data.map(topics => topics.topicname),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeTopicname(e) {
    this.setState({
      topicname: e.target.value
    })
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const note = {
      topicname: this.state.topicname,
      title: this.state.title,
      description: this.state.description,
      date: this.state.date
    }

    console.log(note);

    axios.post('http://localhost:5000/notes/update/' + this.props.match.params.id, note)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Note</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Topicname: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.topicname}
              onChange={this.onChangeTopicname}>
              {
                this.state.topics.map(function(topic) {
                  return <option 
                    key={topic}
                    value={topic}>{topic}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Title: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Note" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}