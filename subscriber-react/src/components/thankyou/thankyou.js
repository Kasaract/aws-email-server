import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './thankyou.css';

class ThankYou extends Component {

  render() {
    return (
      <div className="card-wrapper">
        <Card>
          <Card.Body>

              <Card.Title>
                <div className="title">
                  Thank you for subscribing to my future email updates!
                </div>
              </Card.Title>
              <Card.Text>
                <div className="text">
                  Look forward to staying in touch.
                </div>
              </Card.Text>
              
              <Card.Text>
                <div className="text">
                  - Gary
                </div>
              </Card.Text>
            <Button variant="primary" href="/">
                Go back
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ThankYou;
