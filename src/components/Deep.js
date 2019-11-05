import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';
import Navbar from './Navbar';

const BlackBox = styled.div`
  height: ${props => props.heightPercentage}%;
  width: 100%;
  background: #000;
  transform-origin: ${props => props.xDirection} center;
`;


const BlackBoxAnimated = ({
  startAnimation = false,
  heightPercentage,
  reverseDirection = false
}) => (
  <Motion
    defaultStyle={{ scaleX: 1 }}
    style={{ scaleX: spring(startAnimation ? 0 : 1) }}
  >
    {style => (
      <BlackBox
        heightPercentage={heightPercentage}
        xDirection={reverseDirection ? `left` : `right`}
        style={{
          transform: `scaleX(${style.scaleX})`
        }}
      />
    )}
  </Motion>
);

BlackBoxAnimated.propTypes = {
  startAnimation: PropTypes.bool,
  heightPercentage: PropTypes.number.isRequired,
  reverseDirection: PropTypes.bool
};

class Deep extends Component {
  componentWillMount() {
    this.setState({
      animationNumber: 1
    });

    setTimeout(this.startNextAnimation, 500);
    setTimeout(this.startNextAnimation, 1000);
    setTimeout(this.startNextAnimation, 1500);
    setTimeout(this.startNextAnimation, 2000);
    setTimeout(this.startNextAnimation, 2500);
    setTimeout(this.startNextAnimation, 3000);
    setTimeout(this.startNextAnimation, 3500);
    setTimeout(this.startNextAnimation, 4000);
    setTimeout(this.startNextAnimation, 4500);
  }

  startNextAnimation = () => {

    this.setState({
      animationNumber: this.state.animationNumber + 1
    });
  };

  refreshPage = () => {
    window.location.reload(false);
  };

  render() {
    const { animationNumber } = this.state;

    return (
      <div>
        <Navbar />
        <div>
          <button className="center-button" onClick={this.refreshPage}>Click to reload!</button>
        </div>
        <div className="imageBox">
          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 1}
          />

          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 2}
          />

          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 3}
          />

          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 4}
          />

          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 5}
          />

          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 6}
          />

          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 7}
          />

          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 8}
          />

          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 9}
          />

          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 10}
          />
        </div>
      </div>
    );
  }
}

export default Deep;
