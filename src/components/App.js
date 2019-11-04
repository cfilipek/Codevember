import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        < Navbar />
        <div className='container'>
          <div className="projects">
            <Row>
              <Col md={3}>
                <Link className="hover-opacity" to="/contrast">
                  <div className="box">
                    <h3 className="white-text less-margin-text"># 01</h3>
                    <h3 className="white-text">Contrast</h3>
                  </div>
                </Link>
              </Col>
              <Col md={3}>
              <Link className="hover-opacity">
                  <div className="box">
                    <h3 className="white-text less-margin-text"># 02</h3>
                    <h3 className="white-text">Geometric</h3>
                  </div>
                </Link>
              </Col>
              <Col md={3}>
              <Link className="hover-opacity">
                  <div className="box">
                    <h3 className="white-text less-margin-text"># 03</h3>
                    <h3 className="white-text">Deep</h3>
                  </div>
                </Link>
              </Col>
              <Col md={3}>
              <Link className="hover-opacity">
                  <div className="box">
                    <h3 className="white-text less-margin-text"># 04</h3>
                    <h3 className="white-text">Big</h3>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
