import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";
import { tween } from "popmotion";
import Navbar from './Navbar'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.button`
  top: 55px;
  left: 0;
  position: absolute;
`;

const Square = posed.div({
  fullscreen: {
    width: "100vw",
    height: "100vh",
    transition: tween
  },
  idle: {
    width: 100,
    height: 100,
    transition: tween
  }
});

const StyledSquare = styled(Square)`
  background: red;
`;

class Big extends Component {
  state = {
    active: false
  };

  render() {
    return (
      <div>
        <Navbar />
        {!this.state.active? <h3 className="white-text">what happens when you click on the box?</h3> : <h3 className="white-text">BAM!</h3>}
        <Container>
          <StyledSquare
            pose={this.state.active ? "fullscreen" : "idle"}
            onClick={() => this.setState({ active: true })}
          />
          {this.state.active && (
            <Btn type="button" onClick={() => this.setState({ active: false })}>
              Close!
            </Btn>
          )}
        </Container>
      </div>
    );
  }
}

export default Big;
