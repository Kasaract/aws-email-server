import React, { Component } from 'react';

// import './getsubscribers.css';

class GetSubscribers extends Component {
  constructor() {
    super();
    this.state = {
      subscribers: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/subscribers')
      .then(res => res.json())
      .then(res => this.setState({ subscribers: res.data }))
      .catch(err => console.log(err));
  }

  renderSubscribers = ({ _id, email }) => <li key={_id}>{email}</li>

  render() {
    const { subscribers } = this.state;

    return (
      <div className="getsubscribers">
        <ul>
          {subscribers.map(this.renderSubscribers)}
        </ul>
      </div>
    );
  }
}

export default GetSubscribers;
