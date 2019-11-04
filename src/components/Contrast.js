import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Row, Col } from 'react-bootstrap';

class Contrast extends Component {
  render() {
    return (
      <div>
        < Navbar />
        <div className='container'>
          <div className="projects">
            <h2 className="title">Press hover over center of circles for surprise.</h2>
            <Row>
              <Col md={2}>
                <div className="circle"></div>
              </Col>
              <Col md={2}>
                <div className="circle"></div>
              </Col>
              <Col md={2}>
                <div className="circle"></div>
              </Col>
              <Col md={2}>
                <div className="circle"></div>
              </Col>
              <Col md={2}>
                <div className="circle"></div>
              </Col>
              <Col md={2}>
                <div className="circle"></div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Contrast;
