import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        < Navbar />
        <div className='container'>
          <div className="projects">
            <Row>
              <Col md={3}>
                <div className="box">
                  <h3 className="white-text">Contrast</h3>
                </div>
              </Col>
              <Col md={3}></Col>
              <Col md={3}></Col>
              <Col md={3}></Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
