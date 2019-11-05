import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import Navbar from './Navbar';
import { Row, Col, Button } from 'react-bootstrap'
import { Form } from 'react-advanced-form';
import { Input } from 'react-advanced-form-addons';


class Geometric extends Component {
  state = {
    left: 0
  };

  handleClick = val => {
;    if (val && !isNaN(val)) {
      this.setState({
        left: +val
      });
    }
  };

  reset = () => {this.setState({ left: 0 })
    this.form.reset()}

  changeHandler = event => {
    console.log(event);
      this.form = event.nextValue;
  }
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
            <div className="geometric-box" style={{ position: 'absolute', ...val, marginTop: 200 }}></div>
          )}
        </Motion>
        <div className="spacer"/>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <Form ref={form => (this.form = form)}>
              <Input
                type="number"
                placeholder="enter a value"
                onChange={this.changeHandler}
              />
               <Button style={{ marginLeft: 20 }} onClick={() => this.handleClick(parseInt(this.form))}>Set</Button>
               <Button style={{ marginLeft: 20 }} onClick={(this.reset)}>Reset</Button>
            </Form>
          </Col>
          <Col md={4} />
        </Row>
      </React.Fragment>
    );
  }
}

export default Geometric;
