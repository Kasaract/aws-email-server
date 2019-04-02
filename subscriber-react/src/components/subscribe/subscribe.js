import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

import './subscribe.css';

class Subscribe extends Component {
  constructor() {
    super();
    this.state = {
      subscriber: {
          firstName: '',
          lastName: '',
          email: ''
      }
    }
  }

  addSubscriber = () => {
    const { subscriber } = this.state;
    console.log({subscriber});
    fetch(`http://localhost:4000/subscribers/add?firstName=${subscriber.firstName}&lastName=${subscriber.lastName}&email=${subscriber.email}`, {
      method: 'post'
    })
      .then(console.log("Added subscriber successfully!"))
      .catch(err => console.log(err));
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { subscriber } = this.state;
    return (
      <div className="subscribe-wrapper">
        <div className="message">
          <Form
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Label>Thanks for checking this form out! Feel free to subscribe below to my email newsletters if you'd like to stay updated on what I've been up to and keep in touch! You can also unsubscribe at any time.</Form.Label>
          </Form>
        </div>
        <div className="message_name">
          <Form
            onSubmit={e => this.handleSubmit(e)}          
          >
            <Form.Label>- Gary</Form.Label>
          </Form>
        </div>
        <div className="subscribe">
          <Form
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Row>
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>First</Form.Label>
                <Form.Control 
                  required 
                  type="text" 
                  placeholder="John"
                  value={subscriber.firstName} 
                  onChange={e => this.setState({ subscriber: { ...subscriber, firstName: e.target.value}})}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Last</Form.Label>
                <Form.Control
                  required
                  type="text" 
                  placeholder="Smith" 
                  value={subscriber.lastName}
                  onChange={e => this.setState({ subscriber: { ...subscriber, lastName: e.target.value}})}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                required  
                placeholder="johnsmith@gmail.com" 
                value={subscriber.email}
                onChange={e => this.setState({ subscriber: { ...subscriber, email: e.target.value}})}
              />
            </Form.Group>

            <Button variant="primary" onClick={this.addSubscriber} href="/subscribed">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Subscribe;
