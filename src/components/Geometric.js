import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import Navbar from './Navbar';
import { Row, Col, Button } from 'react-bootstrap'


class Geometric extends Component {
  state = {
    left: 0
  };

  handleClick = val => {
    if (val && !isNaN(val)) {
      this.setState({
        left: +val
      });
    }
  };

  reset = () => this.setState({ left: 0 });

  render() {
    return (
      <React.Fragment>
        < Navbar />
        <div className="spacer"/>
        <Motion
          defaultStyle={{ left: 100 }}
          style={{ left: spring(this.state.left) }}
        >
          {val => (
            <div className="geometric-box" style={{ position: 'absolute', ...val, marginTop: 100 }}></div>
          )}
        </Motion>
        <div className="spacer"/>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <input
              type="number"
              placeholder="enter a value"
              ref={input => (this.input = input)}
            />
            <Button style={{ marginLeft: 20 }} onClick={() => this.handleClick(this.input.value)}>Set</Button>
            <Button style={{ marginLeft: 20 }} onClick={this.reset}>Reset</Button>
          </Col>
          <Col md={4} />
        </Row>
      </React.Fragment>
    );
  }
}

export default Geometric;
